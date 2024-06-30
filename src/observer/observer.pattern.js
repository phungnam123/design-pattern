class Observer {
  constructor(name) {
    this.namePick = name
  }

  updateStatus(location) {
    this.goToHelp(location)
  }

  goToHelp(location) {
    console.log(`${this.namePick}:::PING:::${location}`)
  }
}

class Subject {
  constructor() {
    this.observer = []
  }

  addObserver(observer) {
    this.observer.push(observer)
  }

  notify(location) {
    this.observer.forEach((item) => item.updateStatus(location))
  }
}

const subject = new Subject()

// your pick
const yasua = new Observer('Yasua')
const yone = new Observer('Yone')

subject.addObserver(yasua)
subject.addObserver(yone)

subject.notify('Hi')
