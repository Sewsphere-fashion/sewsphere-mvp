"use client";

import { useState, useEffect } from "react";
import ResetPasswordModal from "../components/Modals/ResetPasswordModal";

export default function ResetPasswordPage() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Get token from URL query params (client-side)
    const searchParams = new URLSearchParams(window.location.search);
    const t = searchParams.get("token");
    setToken(t);

    // Only open modal if token exists
    if (t) setOpen(true);
  }, []);

  if (!token) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Reset token is missing or invalid.</p>
      </div>
    );
  }

  return (
    <>
      {open && <ResetPasswordModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}