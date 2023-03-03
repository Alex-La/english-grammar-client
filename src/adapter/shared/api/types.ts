import {RequestEnum} from './config'

export type RequestDictionary<T> = Record<RequestEnum, T>
export type RequestVariables = {[x: string]: any}
