/**
 * @description
 * Takes an array of dates and returns the oldest one. 
 * Ignores invalid Javascript date objects and returns an Invalid Date if no valid date objects are provided.
 * @example
 * D.min([date1, date2]); // date2
 * D.min([date1, date2, invalidDate]); // date2
 * D.min([invalidDate]); // Error
 */
//@flow weak
import curry from 'lodash.curry'
import {find} from './helpers/util'

export default curry(array => find(Math.min, array))
