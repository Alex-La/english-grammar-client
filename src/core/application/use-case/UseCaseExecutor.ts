import {UseCase} from './UseCase'

export interface UseCaseExecutor {
  <T extends UseCase>(useCase: T, ...args: Parameters<T['execute']>): ReturnType<T['execute']>
}
