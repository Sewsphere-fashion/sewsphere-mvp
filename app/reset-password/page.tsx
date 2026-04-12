"use client";

import { Suspense } from "react";
import ResetPasswordModal from "../components/Modals/ResetPasswordModal";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordModal open={true} onClose={() => {}} />
    </Suspense>
  );
}