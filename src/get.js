/**
 * @description
 * Returns the chosen portion of a date. Returns an Invalid Date if the provided unit of time is not valid.
 * @example
 * const date = new Date('2015-01-02 11:22:33.444')
 * D.get('milliseconds', date); // 444
 * D.get('seconds', date); // 33
 * D.get('minutes', date); // 22
 * D.get('hours', date); // 11
 * D.get('date', date); // 2
 * D.get('day', date); // 5
 * D.get('week', date); // 1
 * D.get('month', date); // 1
 * D.get('year', date); // 2015
 */
//@flow
import curry from 'lodash.curry'
import of from './of'
import {DATE_UNITS} from './helpers/constants'


const getWeek = _date => {
  const getWeekDay = d => d.getUTCDay() ? d.getUTCDay() : 7
  const date = new Date(_date)
  // 4th of jan is always week 1. This is because week numbers are ridiculous and make no logical sense
  const firstWeek = of([date.getUTCFullYear(), 0, 4])
  // set the weekday to sunday
  date.setUTCDate(date.getUTCDate() + (7 - getWeekDay(date)))
  firstWeek.setUTCDate(firstWeek.getUTCDate() + (7 - getWeekDay(firstWeek)))
  const diff = date.getTime() - firstWeek.getTime()
  // return the diff in weeks. add 1 because we are starting at week 1
  // instead of negative week, return week 53 (of previous year)
  return diff < 0 ? 53 : 1 + Math.round(diff / DATE_UNITS.weeks)
}

const getters = {
  'milliseconds': date => date.getUTCMilliseconds(),
  'seconds': date => date.getUTCSeconds(),
  'minutes': date => date.getUTCMinutes(),
  'hours': date => date.getUTCHours(),
  'date': date => date.getUTCDate(),
  'day': date => date.getUTCDay(),
  'week': getWeek,
  'month': date => date.getUTCMonth() + 1,
  'year': date => date.getUTCFullYear()
}

export default curry((prop, date) => {
  if (!getters.hasOwnProperty(prop)) return NaN

  return getters[prop](date)
})
