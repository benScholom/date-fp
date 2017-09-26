/**
 * @description
 * Verifies if a specific Javascript date object is valid.
 * @example
 * var d1 = new Date('foo'); // Invalid Date
 * D.isValid(d1); // false
 * 
 * var d1 = new Date('04-09-2014'); // Wed Apr 09 2014 00:00:00 GMT+0000 (GMT)
 * D.isValid(d1); // true
 */
//@flow weak
import {checkDate, checkNaN} from './helpers/util'

export default date => checkDate(date) && checkNaN(date.getTime()) === false
