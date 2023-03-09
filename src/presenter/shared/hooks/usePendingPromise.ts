import {useCallback, useRef, useState} from 'react'

export interface UsePendingPromiseReturn {
  isPending: boolean
  setPromise<T>(promise: PromiseLike<T>): Promise<T>
}

export const usePendingPromise = (): UsePendingPromiseReturn => {
  const [state, setState] = useState(false)
  const prove = () => setState(true)
  const disprove = () => setState(false)

  const isPendingRef = useRef(state)
  const promisesSetRef = useRef(new Set<PromiseLike<unknown>>())

  const setPromise: UsePendingPromiseReturn['setPromise'] = useCallback(async promise => {
    try {
      if (!promisesSetRef.current.size) {
        prove()

        isPendingRef.current = true
      }

      promisesSetRef.current.add(promise)

      return await promise
    } finally {
      promisesSetRef.current.delete(promise)

      const promisesLeft = !!promisesSetRef.current.size

      if (!promisesLeft) {
        disprove()

        isPendingRef.current = false
      }
    }
  }, [])

  return {
    isPending: state,
    setPromise,
  }
}
