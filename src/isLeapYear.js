/**
 * @description
 * Verifies if the year of the date object supplied is a leap year. Returns false if the date object is invalid.
 * @example
 * D.isLeapYear(new Date('2015-01-01') // false
 * D.isLeapYear(new Date('2004-01-01') // true
 */
// @flow weak
import of from './of'
export default date => of([date.getUTCFullYear(), 1, 29]).getUTCMonth() === 1
