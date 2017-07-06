import { Action } from '../core/index'
import createClientReducer from './client-reducer'

const adder = (state: any = '', action: Action): any => {
  return state + action.value
}
const clientReducer = createClientReducer(adder)

test('it should default to something', () => {
  const state = undefined
  const action = {type: 'test', $hope: {roomId: 'myroom'}}
  expect(clientReducer(state, action)).toBeTruthy()
})
