import {httpClient, RequestEnum} from 'adapter/shared/api'
import {APIIrregularVerb} from 'adapter/shared/api/requestTypes'
import {createStore} from 'zustand'
import {IrregularVerb, IrregularVerbDomain, IrregularVerbsStore, RandomVerb} from '~core'

export function toDomain(apiIrregularVerb: APIIrregularVerb): IrregularVerb {
  return {
    ...apiIrregularVerb,
    id: apiIrregularVerb.id as IrregularVerb['id'],
    __type: IrregularVerbDomain.type,
  }
}

export const irregularVerbsStore = createStore<IrregularVerbsStore>(function (set) {
  return {
    irregularVerbs: [],
    getAll: async () => {
      const irregularVerbs = await httpClient.get<APIIrregularVerb[]>(RequestEnum.GET_ALL_IRREGULAR_VERBS)
      const domainIrregularVerbs = irregularVerbs?.map(toDomain)
      if (domainIrregularVerbs) set({irregularVerbs: domainIrregularVerbs})
      return domainIrregularVerbs
    },
    getRandom: async () => {
      return await httpClient.get<RandomVerb>(RequestEnum.GET_RANDOM_IRREGULAR_VERB)
    },
    giveAnswer: async (id, target, answer) => {
      const result = await httpClient.post<true | APIIrregularVerb>(RequestEnum.GIVE_ANSWER_ON_RANDOM_IRREGULAR_VERB, {
        id,
        target,
        answer,
      })

      if (typeof result === 'boolean') return result
      return toDomain(result as APIIrregularVerb)
    },
  }
})
