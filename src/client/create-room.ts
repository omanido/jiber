import { Action, Store, joinRoom } from '../core/index'

export default function (store: Store) {
  return function createRoom (roomId: string) {
    store.dispatch(joinRoom(roomId))
    return {
      dispatch: (action: Action): void => {
        const roomAction: Action = {...action, $hope: roomId}
        store.dispatch(roomAction)
      },
      getState: (): any => {
        const state = store.getState()
        return state.rooms[roomId].optimisticState
      },
      getConfirmedState: (): any => {
        const state = store.getState()
        return state.rooms[roomId].confirmedState
      }
    }
  }
}