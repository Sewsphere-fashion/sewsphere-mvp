"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ResetPasswordModal({ open, onClose }: Props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // ✅ Password validation
  const isStrongPassword = (pwd: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd);
  };

  const isValid =
    password &&
    confirmPassword &&
    isStrongPassword(password) &&
    password === confirmPassword;

  const handleSubmit = async () => {
    if (!isStrongPassword(password)) {
      setError(
        "Password must be 8+ chars with uppercase, lowercase, number & symbol"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://api.sewsphere.co/api/v1/users/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.status === "fail") {
        throw new Error(data.message);
      }

      // ✅ success
      setPassword("");
      setConfirmPassword("");
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 space-y-4">

        <h2 className="text-lg font-semibold text-center">
          Create New Password
        </h2>

        {/* PASSWORD */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full border rounded-md px-3 py-2 text-sm pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            className="w-full border rounded-md px-3 py-2 text-sm pr-10"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-2.5 text-gray-500"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          disabled={!isValid || loading}
          className={`w-full py-2 rounded-md text-sm text-white ${
            isValid ? "bg-[#C76B4A]" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <button
          onClick={onClose}
          className="w-full text-sm text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}