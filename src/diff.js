/**
 * @description
 * Returns the difference between two dates. Returns NaN if given an invalid date unit.
 * @example
 * const date1 = new Date('2014-02-01 11:12:13.123');
 * D.diff('milliseconds', date1, new Date('2014-02-01 11:12:13.223')); // 100
 * D.diff('seconds', date1, new Date('2014-02-01 11:12:16.123')); // 3
 * D.diff('minutes', date1, new Date('2014-02-01 11:8:13.123')); // -4
 * D.diff('hours', date1, new Date('2014-02-01 22:12:13.123')); // 11
 * D.diff('days', date1, new Date('2014-02-05 11:12:13.123')); // 4
 * D.diff('months', date1, new Date('2014-04-01 11:12:13.123')); // 2
 * D.diff('years', date1, new Date('2015-04-01 11:12:13.123')); // 1
 */
//@flow
import curry from 'lodash.curry'
import get from './get'
import {DATE_UNITS} from './helpers/constants'

export default curry((unit, date1, date2) => {
  if (unit === 'years') {
    return get('year', date2) - get('year', date1)
  }

  if (unit === 'months') {
    return (get('year', date2) - get('year', date1)) * 12 +
      (get('month', date2) - get('month', date1))
  }

  if (!DATE_UNITS[unit]) return NaN

  return Math.round((date2 - date1) / DATE_UNITS[unit])
})
