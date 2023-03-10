import {RequestEnum} from './config'
import {RequestDictionary} from './types'

export const requestDictionary: RequestDictionary<string> = {
  [RequestEnum.GET_ALL_IRREGULAR_VERBS]: '/irregular_verb/all',
  [RequestEnum.GET_RANDOM_IRREGULAR_VERB]: '/irregular_verb',
  [RequestEnum.GIVE_ANSWER_ON_RANDOM_IRREGULAR_VERB]: '/irregular_verb',
} as const
