"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-black pb-safe pt-safe text-white">
      <div className="mx-auto w-full px-4 py-8 sm:px-5 sm:py-12">
        <div className="mb-8 flex flex-col gap-4">
          <div className="text-xl font-bold tracking-tight">AI 股票分析平台</div>

          <div className="flex w-full gap-3">
            <Link
              href="/login"
              className="flex min-h-11 flex-1 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-center hover:bg-zinc-700 sm:flex-initial sm:min-h-10 sm:py-2"
            >
              登入
            </Link>
            <Link
              href="/register"
              className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-white px-4 py-3 text-center text-black hover:bg-zinc-200 sm:flex-initial sm:min-h-10 sm:py-2"
            >
              註冊
            </Link>
          </div>
        </div>

        <div className="grid items-start gap-10">
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              AI Research / Stock / Crypto
            </div>
            <h1 className="mb-4 text-[1.65rem] font-bold leading-snug tracking-tight sm:text-3xl">
              用更直覺的方式
              <br />
              看股票、看市場、看 AI 分析
            </h1>
            <p className="mb-6 text-[15px] leading-relaxed text-zinc-400">
              整合股票、加密貨幣、自選股、K 線圖、AI 分析與排行榜，
              打造你的個人研究平台。
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/register"
                className="flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-center font-semibold text-black hover:bg-zinc-200"
              >
                免費開始
              </Link>
              <Link
                href="/login"
                className="flex min-h-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-3 text-center hover:bg-zinc-700"
              >
                已有帳號登入
              </Link>
            </div>
          </div>

          <div className="rounded-[1.25rem] border border-zinc-800/90 bg-zinc-900/80 p-4 shadow-xl backdrop-blur-sm sm:p-5">
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-xl bg-zinc-800 p-4">
                <div className="text-sm text-zinc-400">AAPL</div>
                <div className="mt-2 text-xl font-bold">250.12</div>
                <div className="mt-1 text-red-400">-2.20%</div>
              </div>
              <div className="rounded-xl bg-zinc-800 p-4">
                <div className="text-sm text-zinc-400">NVDA</div>
                <div className="mt-2 text-xl font-bold">...</div>
                <div className="mt-1 text-green-400">+1.84%</div>
              </div>
              <div className="rounded-xl bg-zinc-800 p-4">
                <div className="text-sm text-zinc-400">BTC</div>
                <div className="mt-2 text-xl font-bold">...</div>
                <div className="mt-1 text-green-400">+0.92%</div>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-zinc-800 p-4 sm:mt-6 sm:p-5">
              <div className="mb-2 text-base font-semibold sm:text-lg">平台特色</div>
              <ul className="space-y-2 text-sm text-zinc-400 sm:text-base">
                <li>• 股票 / Crypto 一站式研究</li>
                <li>• 自選股與個人化 Watchlist</li>
                <li>• AI 分析與市場摘要</li>
                <li>• 排行榜、Scanner、技術面整合</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
