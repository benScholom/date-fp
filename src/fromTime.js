/**
 * @description
 * Creates a new Date from the given milliseconds since EPOCH.
 * @example
 * const date = D.fromTime(0) // 1970-01-01 00:00:00.0Z
 * const date = D.fromTime(60000) // 1970-01-01 00:01:00.0Z
 * const date = D.fromTime(1488374854000) // 2017-03-01 13:27:34.0Z
 */
// @flow weak
import isValid from './isValid'

export default time => {
  const d = new Date(time)
  return isValid(d) ? d : new Date('Invalid')
}
