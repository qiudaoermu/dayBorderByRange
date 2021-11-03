import dayjs from 'dayjs'
import getTimeBorder from '../index'
dayjs.extend(getTimeBorder)



describe('month range', () => {
  const startDate = '2021-11-01'
  const endDate = '2021-11-30'
  test('from dayjs constructor, with month parameter - dayjs.getTimeBorder(options)', () => {
    const getTimeBorder = dayjs.getTimeBorder(1635952894007, 'month')
    expect(getTimeBorder.startDate).toBe(startDate)
    expect(getTimeBorder.endDate).toBe(endDate)
  })
})

describe('quartor range', () => {
  const startDate = '2021-10-01'
  const endDate = '2021-12-31'
  test('from dayjs constructor, with quartor parameter - dayjs.getTimeBorder(options)', () => {
    const getTimeBorder = dayjs.getTimeBorder(1635952894007, 'quartor')
    expect(getTimeBorder.startDate).toBe(startDate)
    expect(getTimeBorder.endDate).toBe(endDate)
  })
})

describe('year range', () => {
  const startDate = '2021-01-01'
  const endDate = '2021-12-31'
  test('from dayjs constructor, with year parameter - dayjs.getTimeBorder(options)', () => {
    const getTimeBorder = dayjs.getTimeBorder(1635952894007, 'year')
    expect(getTimeBorder.startDate).toBe(startDate)
    expect(getTimeBorder.endDate).toBe(endDate)
  })
})
