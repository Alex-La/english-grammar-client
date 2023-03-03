import {IrregularVerbsStore} from '../port'
import {UseCase} from './UseCase'

export class GetIrregularVerbsUseCase implements UseCase {
  public constructor(private readonly irregularVerbsStore: IrregularVerbsStore) {
    this.execute = irregularVerbsStore.getAll
  }

  public execute: IrregularVerbsStore['getAll']
}
