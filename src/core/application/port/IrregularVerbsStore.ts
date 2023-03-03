import {IrregularVerb} from '../../domain'

export interface IrregularVerbsStore {
  irregularVerbs: IrregularVerb[]
  getAll(): PromiseMaybe<IrregularVerb[]>
}
