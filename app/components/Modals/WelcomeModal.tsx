"use client";

import { useRouter } from "next/navigation";

interface WelcomeModalProps {
  open: boolean;
  firstName: string;
  onClose: () => void;
}

export default function WelcomeModal({
  open,
  firstName,
  onClose,
}: WelcomeModalProps) {
  const router = useRouter();

  if (!open) return null;

  const handleContinue = () => {
    onClose(); 
    router.push("/designer/edit-profile"); 
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    await fetch("https://api.sewsphere.co/api/v1/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.removeItem("token");
    onClose();
    router.push("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose} 
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center space-y-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="text-3xl">👋</div>

        <h2 className="text-xl font-semibold">Welcome, {firstName}!</h2>

        <p className="text-sm text-gray-500">
          You've successfully logged in.
        </p>

        <button
          onClick={handleContinue}
          className="w-full rounded-md bg-[#C76B4A] py-2 text-sm text-white"
        >
          Continue to Profile
        </button>

        <button
          onClick={handleLogout}
          className="w-full rounded-md border border-red-400 py-2 text-sm text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}