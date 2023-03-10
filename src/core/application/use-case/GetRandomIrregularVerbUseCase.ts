import {IrregularVerbsStore} from '../port'
import {UseCase} from './UseCase'

export class GetRandomIrregularVerbUseCase implements UseCase {
  public constructor(private readonly irregularVerbsStore: IrregularVerbsStore) {
    this.execute = irregularVerbsStore.getRandom
  }

  public execute: IrregularVerbsStore['getRandom']
}
