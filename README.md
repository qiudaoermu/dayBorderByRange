### compute first day and last day by provided date

### 根据提供的时间，得出当前时间 月 季 年 第一天至最后一天

### usage

dayjs().getTimeBorder($time, type)

### 参数

<$time>
时间戳 

< type >
month | quarter | year

### e.g:

let time = dayjs.getTimeBorder(1635952894007, 'month')

time.startDate // 2021-11-01

time.endDate //  2021-11-30
