import {irregularVerbsStore} from 'adapter/service'
import {GetIrregularVerbsUseCase, GetRandomIrregularVerbUseCase, GiveAnswerOnIrregularVerbUseCase} from '~core'

const verbsStore = irregularVerbsStore.getState()

export const getIrregularVerbsUseCase = new GetIrregularVerbsUseCase(verbsStore)
export const getRandomIrregularVerbUseCase = new GetRandomIrregularVerbUseCase(verbsStore)
export const giveAnswerOnIrregularVerbUseCase = new GiveAnswerOnIrregularVerbUseCase(verbsStore)
