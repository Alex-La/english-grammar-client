import {RequestEnum} from './config'
import {RequestDictionary} from './types'

export const requestDictionary: RequestDictionary<string> = {
  [RequestEnum.GET_ALL_IRREGULAR_VERBS]: '/irregular_verbs',
} as const
