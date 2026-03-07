"use client"

import LoginAndSignupForm from "../forms/LoginAndSignupForm"


interface AuthModalProps {
    open: boolean
    mode: "login" | "signup" | "forgot"
    onClose: () => void
}

export default function AuthModal({ open, mode, onClose }: AuthModalProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-white rounded-full px-2 py-1 shadow"
                >
                    ✕
                </button>

                <LoginAndSignupForm defaultMode={mode} />
            </div>
        </div>
    )
}