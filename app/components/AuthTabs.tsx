"use client"

type AuthMode = "login" | "signup" | "forgot"

interface AuthTabsProps {
    mode: AuthMode
    setMode: (mode: AuthMode) => void
}

export function AuthTabs({ mode, setMode }: AuthTabsProps) {
    return (
        <div className="flex bg-gray-100 rounded-xl p-1 px-2 mb-4">
            <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 rounded-md text-sm transition cursor-pointer ${mode === "login"
                        ? "bg-white text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
            >
                Sign In
            </button>

            <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-md text-sm transition cursor-pointer ${mode === "signup"
                        ? "bg-white text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
            >
                Sign Up
            </button>
        </div>
    )
}