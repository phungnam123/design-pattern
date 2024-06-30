const getPrice = (originalPrice, typePromotion = 'default') => {
  // Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
  if (typePromotion === 'preOder') {
    return originalPrice * 0.2 // giảm 20%
  }

  // Tiếp tục thêm tính năng khuyễn mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
  if (typePromotion === 'promotion') {
    return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30
  }

  // Đến ngày blackFriday promotion, ví dụ Nếu giá gốc < 200 thì giảm 20%, còn > thì giảm tối đa 50
  if (typePromotion === 'blackFriday') {
    return originalPrice <= 200 ? originalPrice * 0.2 : originalPrice - 50
  }

  // Thời xưa chưa có marketing như bây giờ.
  if (typePromotion === 'default') {
    return originalPrice
  }
}

console.log('-->>>', getPrice(210, 'blackFriday'))
