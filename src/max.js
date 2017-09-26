/**
 * @description
 * Takes an array of dates and returns the latest one. Ignores invalid Javascript date objects and returns an Invalid Date if no valid date objects are provided
 * @example
 * const date1 = new Date('2015-01-01 11:22:33.333');
 * const date2 = new Date('2014-04-09 01:22:33.333');
 * const invalidDate = new Date('foo');
 * 
 * D.max([date1, date2]); // date1
 * D.max([date1, date2, invalidDate]); // date1
 * D.max([invalidDate]); // Error
 */
// @flow weak
import {find, any} from './helpers/util'
import isValid from './isValid'
export default dates =>
  any(isValid, dates) ? find(Math.max, dates) : new Date('invalid')
