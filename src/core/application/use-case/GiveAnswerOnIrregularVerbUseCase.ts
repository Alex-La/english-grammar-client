import {IrregularVerbsStore} from '../port'
import {UseCase} from './UseCase'

export class GiveAnswerOnIrregularVerbUseCase implements UseCase {
  public constructor(private readonly irregularVerbsStore: IrregularVerbsStore) {
    this.execute = irregularVerbsStore.giveAnswer
  }

  public execute: IrregularVerbsStore['giveAnswer']
}
