import axios from 'axios'

import {API_URL} from './config'
import {requestDictionary} from './requestDictionary'
import {RequestBuilder} from './types'

class HttpClient {
  private readonly clientInstance = axios.create({baseURL: API_URL})

  public get: RequestBuilder = async request => {
    const {data} = await this.clientInstance.get(requestDictionary[request])
    return data
  }

  public post: RequestBuilder = async (request, variables) => {
    const {data} = await this.clientInstance.post(requestDictionary[request], variables)
    return data
  }

  public put: RequestBuilder = async request => {
    return await this.clientInstance.put(requestDictionary[request])
  }

  public delete: RequestBuilder = async request => {
    return await this.clientInstance.delete(requestDictionary[request])
  }
}

export const httpClient = new HttpClient()
