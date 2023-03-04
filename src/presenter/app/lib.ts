import {ComposeFunctions} from './types'

export const composeFunctions: ComposeFunctions = function (...functions) {
  if (!functions.length) throw new Error('No functions passed')

  function reducer(f: Function, g: Function) {
    return (...args: any[]) => f(g(...args))
  }

  return functions.reduce(reducer)
}
