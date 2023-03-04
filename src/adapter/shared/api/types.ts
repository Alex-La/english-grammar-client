import {RequestEnum} from './config'

export type RequestDictionary<T> = Record<RequestEnum, T>
export type RequestVariables = {[x: string]: any}
export interface RequestBuilder {
  <Data = any, Variables = RequestVariables>(request: RequestEnum, variables?: Variables): PromiseMaybe<Data>
}
