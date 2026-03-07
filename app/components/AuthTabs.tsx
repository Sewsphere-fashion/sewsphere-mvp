"use client"

type AuthMode = "login" | "signup" | "forgot"

interface AuthTabsProps {
    mode: AuthMode
    setMode: (mode: AuthMode) => void
}

export function AuthTabs({ mode, setMode }: AuthTabsProps) {
    return (
        <div className="flex bg-muted rounded-lg p-1 mb-6">
            <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 rounded-md text-sm transition ${mode === "login"
                        ? "bg-white shadow text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
            >
                Sign In
            </button>

            <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-md text-sm transition ${mode === "signup"
                        ? "bg-white shadow text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
            >
                Sign Up
            </button>
        </div>
    )
}