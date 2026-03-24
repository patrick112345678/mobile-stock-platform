"use client"

import { AuthCardSkeleton } from "@/components/LoadingShell"
import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { loginUser, saveToken } from "@/lib/api"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const msg = searchParams.get("msg")
    if (msg) setError(msg)
  }, [searchParams])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")

      const data = await loginUser(username, password)
      saveToken(data.access_token)

      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "登入失敗")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-8 text-white pb-safe">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">登入</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-zinc-400">帳號</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 outline-none sm:py-2"
              placeholder="請輸入帳號"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">密碼</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 outline-none sm:py-2"
              placeholder="請輸入密碼"
              autoComplete="current-password"
            />
          </div>

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 hover:bg-zinc-700 disabled:opacity-60 sm:min-h-10 sm:py-2"
          >
            {loading ? "登入中..." : "登入"}
          </button>
        </form>

        <div className="mt-6 space-y-3 text-sm text-zinc-400">
          <div>
            還沒有帳號？
            <a href="/register" className="ml-2 text-white underline">
              前往註冊
            </a>
          </div>
          <div>
            <a href="/pricing" className="text-violet-400 underline hover:text-violet-300">
              付費方案 · 解鎖 AI 功能
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<AuthCardSkeleton />}>
      <LoginForm />
    </Suspense>
  )
}
