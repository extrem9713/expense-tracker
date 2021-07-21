function toDate(date) {
  //可返回格林威治時間和本地時間之間的時差，以分鐘為單位
  return new Date(date.getTime() - (date.getTimezoneOffset()*60*1000))
  //返回YYYY-MM-DDTHH
  .toISOString()
  .split("T")[0]
}

module.exports = toDate