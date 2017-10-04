import { Reducer, Middleware } from 'jiber-core'

/**
 * The potential options that can be passed in when creating
 * a client store
 */
export interface ClientSettingsInput {
  credential?: string
  middleware?: Array<Middleware>,
  reducer?: Reducer,
  url?: string,
  socketPort?: number,
  stunServers?: string[],
  initialState?: any,
  backoffMs?: number,
  actionCreators?: {[key: string]: Function}
}
