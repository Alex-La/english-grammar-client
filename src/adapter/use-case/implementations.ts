import {irregularVerbsStore} from 'adapter/service'
import {GetIrregularVerbsUseCase} from '~core'

export const getIrregularVerbsUseCase = new GetIrregularVerbsUseCase(irregularVerbsStore.getState())
