"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ResetPasswordModal({ open, onClose }: Props) {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!open) return null;

  // ✅ Password validation
  const isStrongPassword = (pwd: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pwd);
  };

  const isValid =
    newPassword &&
    confirmPassword &&
    isStrongPassword(newPassword) &&
    newPassword === confirmPassword;

  const handleSubmit = async () => {
    if (!token) {
      setError("Reset token is missing or invalid");
      return;
    }
    if (!isStrongPassword(newPassword)) {
      setError(
        "Password must be 8+ characters with uppercase, lowercase, number & symbol",
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.sewsphere.co/api/v1/users/reset-password?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
        
            newPassword,
            confirmPassword,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok || data.status === "fail") {
        throw new Error(data.message);
      }

      // ✅ success
      setNewPassword("");
      setConfirmPassword("");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 space-y-4">
        {!success ? (
          <>
            <h2 className="text-lg font-semibold text-center">
              Create New Password
            </h2>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError("");
                }}
                className="w-full border rounded-md px-3 py-2 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C76B4A]"
              />

              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                className="w-full border rounded-md px-3 py-2 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C76B4A]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={!isValid || loading}
              className={`w-full py-2 rounded-md text-sm text-white ${
                isValid ? "bg-[#C76B4A]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold text-green-600">
              Password Reset Successful 🎉
            </h2>

            <p className="text-sm text-gray-500">
              You can now log in with your new password
            </p>

            <button
              onClick={() => {
                onClose();
                router.push("/?auth=login");
              }}
              className="w-full bg-[#C76B4A] text-white py-2 rounded-md text-sm"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
