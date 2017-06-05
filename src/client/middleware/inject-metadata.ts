import { Action, HopeAction, CLIENT } from '../../core/index'
import nextActionId from '../utils/next-action-id'
import { OPTIMISTIC_ACTION } from '../reducers/client-room/client-room'

interface RoomState {
  myUserId?: string,
  optimisticActions: HopeAction[]
}

export default function createInjectMetadata (getState: Function) {
  return function injectMetadata (action: Action): Action {
    if (!action.$hope) return action
    if (action.$hope.source) return action

    const meta = action.$hope
    const roomId = (typeof meta === 'string') ? meta : meta.roomId
    const roomState: RoomState = getState()[roomId]                             // todo: this will not work with multiple room types
    return {
      ...action,
      $hope: {
        type: OPTIMISTIC_ACTION,
        actionId: nextActionId(roomState.myUserId || '', roomState),
        roomId,
        source: CLIENT,
        userId: roomState.myUserId || '',
        timeMs: new Date().getTime()
      }
    }
  }
}