import { useEffect, useRef } from 'react'

export function useInterval(
  callback: () => unknown,
  delay: number | null,
  immediate: boolean = false
): void {
  const savedCallback: React.MutableRefObject<
    (() => unknown) | undefined
  > = useRef()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = (): unknown => savedCallback.current && savedCallback.current()
    if (delay !== null && delay > 0) {
      if (immediate) tick()
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay, immediate])
}
