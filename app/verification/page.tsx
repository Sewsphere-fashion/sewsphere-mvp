"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function VerificationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<
    "success" | "failed" | "already-verified"
  >("failed");

  useEffect(() => {
    const param = searchParams.get("status");
    if (
      param === "success" ||
      param === "failed" ||
      param === "already-verified"
    ) {
      setStatus(param);
    }
  }, [searchParams]);

  const modalContent = {
    success: {
      icon: "🎉",
      title: "Email Verified!",
      message:
        "Your email has been successfully verified. You can now continue using your account.",
    },
    "already-verified": {
      icon: "⚡",
      title: "Already Verified",
      message: "This email was already verified. Please log in to continue.",
    },
    failed: {
      icon: "❌",
      title: "Verification Failed",
      message:
        "This verification link is invalid or has expired. Please sign up again or contact support.",
    },
  };

  const { icon, title, message } = modalContent[status];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center space-y-4">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <p className="text-sm text-gray-500">{message}</p>
        <button
          onClick={() => router.push("/?auth=login")}
          className="w-full rounded-md cursor-pointer bg-[#C76B4A] py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Continue to login
        </button>
      </div>
    </div>
  );
}

export default function Verification() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <VerificationContent />
    </Suspense>
  );
}
