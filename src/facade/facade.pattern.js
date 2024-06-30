class Discount {
  calc(value) {
    return value * 0.9
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class ShoppeFacade {
  constructor() {
    this.discount = new Discount()
    this.fees = new Fees()
    this.shipping = new Shipping()
  }

  calc(price) {
    price = this.discount.calc(price)
    console.log('Discount: ', price)
    price = this.fees.calc(price)
    console.log('Fees:', price)
    price += this.shipping.calc()
    console.log('Shipping:', price)
    return price
  }
}

function buy(price) {
  const shoppe = new ShoppeFacade()
  console.log(`Price: ${shoppe.calc(price)}`)
}

buy(100000)
