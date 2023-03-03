import {httpClient, RequestEnum} from 'adapter/shared/api'
import {createStore} from 'zustand'
import {IrregularVerb, IrregularVerbsStore} from '~core'

export const irregularVerbsStore = createStore<IrregularVerbsStore>(set => ({
  irregularVerbs: [],
  getAll: async () => {
    const irregularVerbs = await httpClient.get<IrregularVerb[]>(RequestEnum.GET_ALL_IRREGULAR_VERBS)
    if (irregularVerbs) set({irregularVerbs})
    return irregularVerbs
  },
}))
