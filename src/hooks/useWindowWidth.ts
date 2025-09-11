import { useState, useEffect } from 'react'

/**
 * 현재 화면의 넓이를 px로 반환
 */
function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}

export default useWindowWidth
