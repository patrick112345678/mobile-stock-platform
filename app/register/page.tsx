"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/lib/api"

export default function RegisterPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")

      await registerUser(username, email, password)
      router.push("/login")
    } catch (err) {
      setError(err instanceof Error ? err.message : "註冊失敗")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-8 text-white pb-safe">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">註冊</h1>

        <form onSubmit={handleRegister} className="space-y-4">
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
            <label className="mb-2 block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 outline-none sm:py-2"
              placeholder="請輸入 Email"
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </div>

          {error && <div className="break-words text-sm text-red-400">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="min-h-12 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-3 hover:bg-zinc-700 disabled:opacity-60 sm:min-h-10 sm:py-2"
          >
            {loading ? "註冊中..." : "註冊"}
          </button>
        </form>

        <div className="mt-6 space-y-3 text-sm text-zinc-400">
          <div>
            已經有帳號？
            <a href="/login" className="ml-2 text-white underline">
              前往登入
            </a>
          </div>
          <div>
            <a href="/pricing" className="text-violet-400 underline hover:text-violet-300">
              查看付費方案（Premium）
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}