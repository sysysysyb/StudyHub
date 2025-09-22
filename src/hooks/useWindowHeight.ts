import { useState, useEffect } from 'react'

/**
 * 현재 화면의 넓이를 px로 반환
 */
function useWindowHeight(): number {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowHeight
}

export default useWindowHeight
