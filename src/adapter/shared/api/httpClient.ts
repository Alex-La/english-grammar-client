import axios from 'axios'

import {API_URL, RequestEnum} from './config'
import {requestDictionary} from './requestDictionary'
import {RequestVariables} from './types'

export class HttpClient {
  private readonly clientInstance = axios.create({baseURL: API_URL})

  public async get<D = any, V = RequestVariables>(request: RequestEnum, variables?: V): PromiseMaybe<D> {
    const {data} = await this.clientInstance.get<D>(requestDictionary[request], {method: 'GET'})
    return data
  }

  public async post() {}
  public async put() {}
  public async delete() {}
}

export const httpClient = new HttpClient()
