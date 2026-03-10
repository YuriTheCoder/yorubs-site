"use client"

import { useState, useEffect } from "react"
import { CounterAnimation } from "@/components/animations/CounterAnimation"
import { Users } from "lucide-react"

export function WaitlistCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => setCount(data.count || 0))
      .catch(() => {})
  }, [])

  if (count === 0) return null

  return (
    <div className="flex items-center justify-center gap-3 text-text-secondary">
      <Users className="w-5 h-5 text-gold" />
      <span className="text-lg">
        <CounterAnimation end={count} className="text-gold font-semibold" />
        {" "}pessoas já garantiram seu lugar
      </span>
    </div>
  )
}
