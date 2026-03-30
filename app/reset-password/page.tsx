"use client";

import ResetPasswordModal from "../components/Modals/ResetPasswordModal";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <ResetPasswordModal open={true} onClose={() => {}} />
    </div>
  );
}