import {UseCaseExecutor} from '~core'

export const executeUseCase: UseCaseExecutor = (useCase, ...args) => {
  if (!('execute' in useCase)) {
    throw new TypeError(`Use-case implementation error.`)
  }

  return useCase.execute.apply(useCase, args) as ReturnType<typeof useCase['execute']>
}
