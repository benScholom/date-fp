/**
 * @description
 * Returns the time since the Unix epoch, in the specified unit (milliseconds, seconds, minutes, hours, days), of the supplied Javascript date object.
 * Returns NaN if the unit of time or Javascript date object is not valid
 * @example
 * const date = new Date.UTC('2015-10-16T00:00:00+00:00')
 * D.convertTo('milliseconds', date) // 1444953600000
 * D.convertTo('seconds', date) // 1444953600
 * D.convertTo('minutes', date) // 24082560
 * D.convertTo('hours', date) // 401376
 * D.convertTo('days', date) // 16724
 */
//@flow
import curry from 'lodash.curry'
import isValid from './isValid'
import {DATE_UNITS} from './helpers/constants'

const convertTo = (unit, date) => Math.round(date.getTime() / DATE_UNITS[unit])

export default curry((unit, date) => {
  if (!DATE_UNITS.hasOwnProperty(unit)) {
    return NaN
  }
  return isValid(date) ? convertTo(unit, date) : NaN
})
