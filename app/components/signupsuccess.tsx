"use client";

interface SignupSuccessProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupSuccess({
  open,
  onClose,
}: SignupSuccessProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl text-center space-y-4">
        
        {/* Icon */}
        <div className="text-4xl">🎉</div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black">
          Signup Successful!
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-500">
          We’ve sent a verification link to your email.  
          Please check your inbox and verify your account before continuing.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full rounded-md bg-[#C76B4A] py-2 text-sm font-medium text-white hover:opacity-90"
        >
          Okay
        </button>
      </div>
    </div>
  );
}