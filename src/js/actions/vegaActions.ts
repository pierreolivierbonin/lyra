import {createStandardAction} from 'typesafe-actions';
/**
 * Action creator to set the state to represent an in-progress Lyra model parse.
 *
 * @param {boolean} value - Whether or not to mark a parse as being in-progress
 * @returns {Object} An action object
 */
export const parseVega = createStandardAction('PARSE_VEGA')<boolean, null>();

/**
 * Action creator to set a flag which will be used to reparse (destroy and
 * re-create) the vega view representing the Lyra model.
 *
 * @param {boolean} shouldReparse - Whether the view should be recreated on the
 * next store update cycle.
 * @returns {Object} An action object
 */
export const invalidateVega = createStandardAction('INVALIDATE_VEGA')<boolean, null>();
