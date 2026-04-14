"use client";

import LoginAndSignupForm from "../forms/LoginAndSignupForm";

interface AuthModalProps {
  open: boolean;
  mode: "login" | "signup" | "forgot";
  onClose: () => void;
}

export default function AuthModal({ open, mode, onClose }: AuthModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-sm">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-0 right-1 bg-white rounded-full px-2 py-1 shadow"
        >
          ✕
        </button>
        <div className="max-h-[99vh] overflow-y-auto">
          <LoginAndSignupForm defaultMode={mode} />
        </div>{" "}
      </div>
    </div>
  );
}
