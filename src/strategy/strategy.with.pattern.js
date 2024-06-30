/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
 * @param {*} originalPrice
 * @returns
 */

const preOderPrice = (originalPrice) => {
  return originalPrice * 0.2
}

/**
 *Tiếp tục thêm tính năng khuyễn mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
 */

const proMotionPrice = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30
}

/**
 *Đến ngày blackFriday,giá gốc < 200 thì giảm 80%, còn > thì giảm tối đa 50
 * @param {*} originalPrice
 * @returns
 */

const blackFridayPrice = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50
}

const dayPrice6 = (originalPrice) => {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 90
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 *
 */
const defaultPrice = (originalPrice) => {
  return originalPrice
}

// chưa tối ưu
/*
const getPrice = (originalPrice, typePromotion) => {
  if (typePromotion === 'preOder') {
    return preOderPrice(originalPrice)
  }
  if (typePromotion === 'promotion') {
    return proMotionPrice(originalPrice)
  }
  if (typePromotion === 'blackFriday') {
    return blackFridayPrice(originalPrice)
  }
  if (typePromotion === 'default') {
    return defaultPrice(originalPrice)
  }
}
*/

const getPriceStrategies = {
  preOder: preOderPrice,
  promotion: proMotionPrice,
  blackFriday: blackFridayPrice,
  dayPrice6,
  default: defaultPrice,
}
// console.log(getPriceStrategies)
const getPrice = (originalPrice, typePromotion) => {
  return getPriceStrategies[typePromotion](originalPrice)
}

console.log('-->>>', getPrice(200, 'dayPrice6'))

// console.log('-->>>', getPrice(200, 'blackFriday'))
