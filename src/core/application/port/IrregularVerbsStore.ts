import {IrregularVerb} from '../../domain'

export type IrregularVerbWithoutId = Omit<IrregularVerb, 'id'>

export type RandomVerb = {
  id: IrregularVerb['id']
  variant: string
  target: keyof IrregularVerbWithoutId
}

export interface IrregularVerbsStore {
  irregularVerbs: IrregularVerb[]
  getAll(): PromiseMaybe<IrregularVerb[]>
  getRandom(): PromiseMaybe<RandomVerb>
  giveAnswer(
    id: IrregularVerb['id'],
    target: keyof IrregularVerbWithoutId,
    answer: string,
  ): PromiseMaybe<true | IrregularVerb>
}
