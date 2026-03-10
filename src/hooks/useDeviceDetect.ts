"use client"

import { useSyncExternalStore, useCallback } from "react"

interface DeviceInfo {
  isMobile: boolean
  isTouch: boolean
  isDesktop: boolean
}

const serverSnapshot: DeviceInfo = { isMobile: false, isTouch: false, isDesktop: true }

let cachedSnapshot: DeviceInfo = serverSnapshot

function getSnapshot(): DeviceInfo {
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
  const isMobile = window.innerWidth < 768
  const isDesktop = !isMobile

  if (
    cachedSnapshot.isMobile !== isMobile ||
    cachedSnapshot.isTouch !== isTouch ||
    cachedSnapshot.isDesktop !== isDesktop
  ) {
    cachedSnapshot = { isMobile, isTouch, isDesktop }
  }

  return cachedSnapshot
}

function getServerSnapshot(): DeviceInfo {
  return serverSnapshot
}

export function useDeviceDetect(): DeviceInfo {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("resize", callback)
    return () => window.removeEventListener("resize", callback)
  }, [])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
