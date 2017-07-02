import { createAction } from 'redux-actions'

export const INIT = 'modules/init'

export const init = createAction(INIT, members => members)
