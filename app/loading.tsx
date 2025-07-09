"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Loading Shopzilla...")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    const textInterval = setInterval(() => {
      const texts = [
        "Loading Shopzilla...",
        "Preparing your shopping experience...",
        "Getting the best deals ready...",
        "Almost there...",
      ]
      setLoadingText(texts[Math.floor(Math.random() * texts.length)])
    }, 1500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-black text-white">SZ</span>
            </div>
            <div>
              <h1 className="text-6xl font-black text-white animate-pulse">SHOPZILLA</h1>
              <p className="text-xl text-white/80 font-semibold">Big, bold, and unstoppable.</p>
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-4 h-4 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className="text-white/90 text-sm mt-2 font-medium">{Math.round(Math.min(progress, 100))}%</p>
          </div>

          <p className="text-white/90 text-lg font-medium animate-pulse">{loadingText}</p>
        </div>
      </div>
    </div>
  )
}
