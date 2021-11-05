### compute first day and last day by provided date

### 根据提供的时间，得出当前时间的月，季,年的第一天至最后一天。

## usage

dayjs().getTimeBorder(timestamp, type)

## 参数

< timestamp >
timestamp 时间戳 

< type >
month | quarter | year

### e.g:
##### month 月

let time = dayjs.getTimeBorder(1635952894007, 'month')

console.log(time.startDate) // 2021-11-01

console.log(time.endDate)   //  2021-11-30

#### quarter 季度

let time = dayjs.getTimeBorder(1635952894007, 'quarter')

console.log(time.startDate) // 2021-10-01

console.log(time.endDate)   //  2021-12-31

##### year 年
 
let time = dayjs.getTimeBorder(1635952894007, 'year')

console.log(time.startDate) // 2021-01-01

console.log(time.endDate)   //  2021-12-31