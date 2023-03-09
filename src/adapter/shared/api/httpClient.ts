import axios from 'axios'

import {API_URL} from './config'
import {requestDictionary} from './requestDictionary'
import {RequestBuilder} from './types'

class HttpClient {
  private readonly clientInstance = axios.create({baseURL: API_URL})

  public get: RequestBuilder = async request => {
    const {data} = await this.clientInstance.get(requestDictionary[request], {method: 'GET'})
    return data
  }

  public post: RequestBuilder = async request => {
    return await this.clientInstance.get(requestDictionary[request], {method: 'POST'})
  }

  public put: RequestBuilder = async request => {
    return await this.clientInstance.get(requestDictionary[request], {method: 'PUT'})
  }

  public delete: RequestBuilder = async request => {
    return await this.clientInstance.get(requestDictionary[request], {method: 'DELETE'})
  }
}

export const httpClient = new HttpClient()
