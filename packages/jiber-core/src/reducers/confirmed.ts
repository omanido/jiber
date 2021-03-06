import { Action } from '../interfaces/action'
import { Reducer } from '../interfaces/reducer'
import { CONFIRMED_STATE } from '../constants/action-types'

/**
 * State that has been confirmed
 * Only confirmed actions should be passed to this reducer
 */
export const createConfirmed = (subReducer: Reducer): Reducer => {
  return (state: any = undefined, action: Action): any => {
    switch (action.type) {
      case CONFIRMED_STATE:
        return action.confirmed

      default:
        if (action.$confirmed) {
          return subReducer(state, action)
        }
        return state
    }
  }
}
