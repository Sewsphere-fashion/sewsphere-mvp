"use client"

import { useEffect, useState } from "react"
import { AuthTabs } from "../components/AuthTabs"

function Input({
    label,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="space-y-1">
            <label className="text-sm text-muted-foreground">{label}</label>
            <input
                {...props}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C76B4A]"
            />
        </div>
    )
}

/* ---------------- LOGIN ---------------- */

function LoginForm({
    onForgot,
}: {
    onForgot: () => void
}) {

    return (
        <form className="space-y-4">
            <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
            />

            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
            />

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="accent-[#C76B4A]" />
                    Remember Me
                </label>

                <button
                    type="button"
                    onClick={onForgot}
                    className="text-[#C76B4A] hover:underline"
                >
                    Forgot Password?
                </button>
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-[#C76B4A] py-2 text-sm font-medium text-white hover:opacity-90"
            >
                Sign In
            </button>
        </form>
    )
}

/* ---------------- SIGNUP ---------------- */

function SignupForm() {
    return (
        <form className="space-y-4">
            <Input
                label="Full Name"
                type="text"
                placeholder="Victor Otozi"
            />

            <Input
                label="Email"
                type="email"
                placeholder="victor@example.com"
            />

            <Input
                label="Create Password"
                type="password"
            />

            <Input
                label="Confirm Password"
                type="password"
            />

            <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="mt-1 accent-[#C76B4A]" />
                <span>
                    I agree to the{" "}
                    <span className="text-[#C76B4A]">Terms of Services</span> and{" "}
                    <span className="text-[#C76B4A]">Privacy Policy</span>
                </span>
            </label>

            <button
                type="submit"
                className="w-full rounded-md bg-[#C76B4A] py-2 text-sm font-medium text-white hover:opacity-90"
            >
                Sign Up
            </button>
        </form>
    )
}

function ForgotPasswordForm({
    onBackToLogin,
}: {
    onBackToLogin: () => void
}) {
    return (
        <form className="space-y-5">
            {/* Header */}
            <div className="space-y-2">
                <h2 className="text-xl text-center font-semibold text-black">
                    Forgot Password
                </h2>
                <p className="text-sm text-gray-500 text-center">
                    No worries, enter the email address to your account and we’ll send you
                    a secure reset code.
                </p>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <label className="text-sm text-muted-foreground">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-500 px-3 py-2 text-sm focus:outline-none"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full rounded-md bg-[#C76B4A] py-2 text-sm font-medium text-white hover:opacity-90"
            >
                Send Reset Code
            </button>

            {/* Back to login */}
            <p className="text-center text-sm text-muted-foreground">
                Remember password?{" "}
                <button
                    type="button"
                    onClick={onBackToLogin}
                    className="text-[#C76B4A] hover:underline"
                >
                    Sign in
                </button>
            </p>
        </form>
    )
}

/* ---------------- WRAPPER ---------------- */
type AuthMode = "login" | "signup" | "forgot"

export default function LoginAndSignupForm({
    defaultMode = "login",
}: {
    defaultMode?: AuthMode
}) {
    const [mode, setMode] = useState<AuthMode>(defaultMode)

    useEffect(() => {
        setMode(defaultMode)
    }, [defaultMode])

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {mode !== "forgot" && (
                <AuthTabs
                    mode={mode as "login" | "signup"}
                    setMode={setMode}
                />
            )}

            {mode === "login" && (
                <LoginForm onForgot={() => setMode("forgot")} />
            )}

            {mode === "signup" && <SignupForm />}

            {mode === "forgot" && (
                <ForgotPasswordForm
                    onBackToLogin={() => setMode("login")}
                />
            )}

            {mode !== "forgot" && (
                <>
                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-muted-foreground">
                            Or continue with
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <button className="flex w-full items-center justify-center gap-2 rounded-md border py-2 text-sm hover:bg-gray-50">
                        <span className="font-bold">G</span>
                        Google
                    </button>
                </>
            )}
        </div>
    )
}