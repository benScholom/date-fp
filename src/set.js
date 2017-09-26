/**
 * @description
 * Returns a copy of the supplied date with the specified modification. 
 * Returns an Invalid Date if the modification results in an invalid date.
 * @example
 * const date = new Date('2001-01-01 01:01:01.0');
 * D.set('milliseconds', 123, date); // 2001-01-01 01:01:01.123
 * D.set('seconds', 34, date); // 2001-01-01 01:01:34.0
 * D.set('minutes', 22, date); // 2001-01-01 01:22:01.0
 * D.set('hours', 13, date); // 2001-01-01 13:01:01.0
 * D.set('date', 23, date); // 2001-01-23 01:01:01.0
 * D.set('month', 12, date); // 2001-12-01 01:01:01.0
 * D.set('year', 2016, date); // 2016-01-01 01:01:01.0
 */
//@flow
import curry from 'lodash.curry'
import get from './get'
import fromTime from './fromTime'
import { DATE_UNITS } from './helpers/constants'

const setWeek = (value, date) => {
  const currentWeek = get('week', date)
  const diffWeeks = value - currentWeek
  const diffTime = DATE_UNITS.weeks * diffWeeks
  let changedDate = new Date(date.getTime() + diffTime)
  date.setUTCMonth(changedDate.getUTCMonth())
  date.setUTCDate(changedDate.getUTCDate())
}

const setters = {
  'milliseconds': (value, date) => date.setUTCMilliseconds(value),
  'seconds': (value, date) => date.setUTCSeconds(value),
  'minutes': (value, date) => date.setUTCMinutes(value),
  'hours': (value, date) => date.setUTCHours(value),
  'date': (value, date) => date.setUTCDate(value),
  'week': setWeek,
  'month': (value, date) => date.setUTCMonth(value - 1),
  'year': (value, date) => date.setUTCFullYear(value)
}

export default curry((step, value, date) => {
  if (!setters.hasOwnProperty(step)) return new Date('invalid')

  const clone = fromTime(date.getTime())

  setters[step](value, clone)

  return (get(step, clone) === value) ? clone : new Date('invalid')
})
