import {Brand} from 'ts-brand'

export interface IrregularVerb {
  id: Brand<number, 'irregular_verb'>
  translation: string
  v1: string
  v2: string
  v3: string
  __type: string
}

export class IrregularVerbDomain {
  public static type: IrregularVerb['__type'] = IrregularVerbDomain.name

  public static isIrregularVerb(predicate: IrregularVerb | unknown) {
    return typeof predicate === 'object' && predicate !== null && (predicate as IrregularVerb).__type === this.type
  }
}
