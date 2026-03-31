"use client";

import { useEffect, useState } from "react";
import { AuthTabs } from "../components/AuthTabs";
import { Eye, EyeOff } from "lucide-react";
import SignupSuccess from "../components/signupsuccess";
import WelcomeModal from "../components/Modals/WelcomeModal";

function Input({
  label,
  rightIcon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  rightIcon?: React.ReactNode;
}) {
  //   const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1 w-full">
      <label className="text-sm text-muted-foreground">{label}</label>
      <div className="relative">
        <input
          {...props}
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C76B4A]"
        />
        {rightIcon && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

/* ---------------- LOGIN ---------------- */

function LoginForm({ onForgot }: { onForgot: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const validate = () => {
    if (!email || !password) {
      return "Email and password are required";
    }

    if (!email.includes("@")) {
      return "Enter a valid email";
    }

    return "";
  };

  const handleChange =
    (setter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.sewsphere.co/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
    //   localStorage.setItem("token", data.data.accessToken);

      if (!res.ok) {
        throw new Error(data.message || "Login failed, please try again");
      }

       if (data?.data?.accessToken) {
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      
      setEmail("");
      setPassword("");
      setError("");

      const firstName = data.data.user?.firstName || "User";
      setFirstName(firstName);
      setWelcomeOpen(true);
       
    }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange(setEmail)}
      />

      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={handleChange(setPassword)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-gray-500 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}{" "}
          </button>
        }
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input type="checkbox" className="accent-[#C76B4A]" />
          Remember Me
        </label>

        <button
          type="button"
          onClick={onForgot}
          className="text-[#C76B4A] hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>
      </div>

      {error && <p className="text-red-500 text-center text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer rounded-md bg-[#C76B4A] py-2 text-sm font-medium text-white"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <WelcomeModal
        open={welcomeOpen}
        firstName={firstName}
        onClose={() => setWelcomeOpen(false)}
      />
    </form>
  );
}

/* ---------------- SIGNUP ---------------- */

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState<"client" | "designer">("client");
  const [successOpen, setSuccessOpen] = useState(false);

  const validate = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !role
    ) {
      return "All fields are required";
    }

    if (!email.includes("@")) {
      return "Enter a valid email";
    }

    if (!passwordRegex.test(password)) {
      return "Password must be 8+ characters, include uppercase, lowercase, number and symbol";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };
  const handleChange =
    (setter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.sewsphere.co/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup Error, please try again");
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      setSuccessOpen(true);
      //   console.log("SIGNUP SUCCESS:", data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm text-muted-foreground">I’m a</p>
      <div className="flex gap-6 p-1 rounded-lg">
        <button
          type="button"
          onClick={() => setRole("client")}
          className={`flex-1 py-2 rounded-md text-sm transition cursor-pointer ${
            role === "client"
              ? "bg-[#C76B4A] text-white"
              : "bg-white text-black border border-[#E8E8E8] "
          }`}
        >
          Client
        </button>

        <button
          type="button"
          onClick={() => setRole("designer")}
          className={`flex-1 py-2 rounded-md text-sm transition cursor-pointer ${
            role === "designer"
              ? "bg-[#C76B4A] text-white"
              : "bg-white text-black border border-[#E8E8E8]"
          }`}
        >
          Designer
        </button>
      </div>
      <div className="flex gap-2">
        <Input
          label="First Name"
          placeholder="Enter First Name"
          value={firstName}
          onChange={handleChange(setFirstName)}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={handleChange(setLastName)}
        />
      </div>

      <Input
        label="Email"
        type="email"
        placeholder="Enter your Email Address"
        value={email}
        onChange={handleChange(setEmail)}
      />

      <Input
        label="Create Password"
        type={showPassword ? "text" : "password"}
        placeholder="Create a password"
        value={password}
        onChange={handleChange(setPassword)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className=" cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
      />

      <Input
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Re-type your password"
        value={confirmPassword}
        onChange={handleChange(setConfirmPassword)}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
      />
      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" className="mt-1 accent-[#C76B4A]" />
        <span>
          {" "}
          I agree to the{" "}
          <span className="text-[#C76B4A]">Terms of Services</span> and{" "}
          <span className="text-[#C76B4A]">Privacy Policy</span>{" "}
        </span>{" "}
      </label>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md cursor-pointer bg-[#C76B4A] py-2 text-sm font-medium text-white"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>

      <SignupSuccess open={successOpen} onClose={() => setSuccessOpen(false)} />
    </form>
  );
}

/* ---------------- FORGOT PASSWORD ---------------- */

function ForgotPasswordForm({ onBackToLogin }: { onBackToLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const validate = () => {
    if (!email) return "Email is required";
    if (!email.includes("@")) return "Enter a valid email";
    return "";
  };

  const handleChange =
    (setter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setError("");
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(
        "https://api.sewsphere.co/api/v1/users/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "");
      }
      setEmail("");
      setMessage("Reset link sent to your email");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        {" "}
        <h2 className="text-xl text-center font-semibold text-black">
          {" "}
          Forgot Password{" "}
        </h2>{" "}
        <p className="text-sm text-gray-500 text-center">
          {" "}
          No worries, enter the email address to your account and we’ll send you
          a secure reset code.{" "}
        </p>{" "}
      </div>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={handleChange(setEmail)}
      />

      <button
        type="submit"
        disabled={loading}
        className="cursor-pointer w-full rounded-md bg-[#C76B4A] py-2 text-white"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      {message && <p className="text-green-600 text-sm">{message}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="button"
        onClick={onBackToLogin}
        className="cursor-pointer text-sm text-[#C76B4A] underline w-full"
      >
        Back to Login
      </button>
    </form>
  );
}

/* ---------------- WRAPPER ---------------- */

type AuthMode = "login" | "signup" | "forgot";

export default function LoginAndSignupForm({
  defaultMode = "login",
}: {
  defaultMode?: AuthMode;
}) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl">
      {mode !== "forgot" && (
        <AuthTabs mode={mode as "login" | "signup"} setMode={setMode} />
      )}

      {mode === "login" && <LoginForm onForgot={() => setMode("forgot")} />}

      {mode === "signup" && <SignupForm />}

      {mode === "forgot" && (
        <ForgotPasswordForm onBackToLogin={() => setMode("login")} />
      )}

      {mode !== "forgot" && (
        <>
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-muted-foreground">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm hover:bg-gray-50">
            <span className="font-bold">G</span>
            Google
          </button>
        </>
      )}

      {mode === "signup" && (
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setMode("login")}
            className="cursor-pointer text-sm text-[#C76B4A] underline"
          >
            Sign in
          </button>
        </p>
      )}
    </div>
  );
}
