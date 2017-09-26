/**
 * @description
 * Creates a new Date from the given dateParts. Similar to Date.UTC(), but returns a date object. 
 * Month start at 0 to comply with JavaScript standard.
 * @example
 * const date = D.of([1970, 0, 1]) // 1970-01-01 00:00:00.0Z
 * const date = D.of([1970, 1, 1, 13, 30, 10, 120]) // 1970-02-01 13:30:10.120Z
 * const date = D.of([2017]) // 2017-01-01 00:00:00.0Z
 */
export default (dateParts) => {
  const [year, month, day, hour, minute, second, millies] = dateParts
  if (year != null && year < 0) return new Date('invalid')
  if (month != null && (month < 0 || month > 11)) return new Date('invalid')
  if (day != null && (day < 0 || day > 31)) return new Date('invalid')
  if (hour != null && (hour < 0 || hour > 23)) return new Date('invalid')
  if (minute != null && (minute < 0 || minute > 59)) return new Date('invalid')
  if (second != null && (second < 0 || second > 59)) return new Date('invalid')
  if (millies != null && (millies < 0 || millies > 999)) return new Date('invalid')
  return new Date(Date.UTC(...dateParts))
}
