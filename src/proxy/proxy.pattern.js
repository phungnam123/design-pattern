class Leader {
  receiveRequest(offer) {
    console.log(`Boss said:::ok ${offer}`)
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader()
  }

  receiveRequest(offer) {
    this.leader.receiveRequest(offer)
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer
  }

  applyFor(target) {
    target.receiveRequest(this.offer)
  }
}

const devs = new Developer('Namms10 upto 1k USD')
devs.applyFor(new Secretary())
