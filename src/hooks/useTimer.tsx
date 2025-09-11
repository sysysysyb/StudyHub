import { useRef, useState } from 'react'
import { useInterval } from './useInterval'

export function useTimer(defaultMs = 1800000) {
  const [remainSecond, setRemainSecond] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const endAtRef = useRef(0)

  const startTimer = (ms = defaultMs) => {
    endAtRef.current = Date.now() + ms
    setIsCounting(true)
    const leftSecond = Math.max(
      0,
      Math.ceil((endAtRef.current - Date.now()) / 1000)
    )
    setRemainSecond(leftSecond)
  }

  const resetTimer = () => {
    setIsCounting(false)
    endAtRef.current = 0
    setRemainSecond(0)
  }

  useInterval(
    () => {
      if (!isCounting) return
      const leftSecond = Math.max(
        0,
        Math.ceil((endAtRef.current - Date.now()) / 1000)
      )
      setRemainSecond(leftSecond)
      if (leftSecond === 0) resetTimer()
    },
    isCounting ? 1000 : null
  )

  const formatMMSS = (second: number) => {
    const mm = Math.floor(second / 60)
    const ss = String(second % 60).padStart(2, '0')
    return `${mm}:${ss}`
  }

  return { remainSecond, isCounting, startTimer, resetTimer, formatMMSS }
}
