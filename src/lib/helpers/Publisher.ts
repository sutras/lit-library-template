type Subscriber = () => void

export default class Publisher {
  subscribers: Record<string, Subscriber[]> = {}

  subscribe(subscriber: Subscriber, type: string = 'any') {
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(subscriber)
  }

  unsubscribe(subscriber: Subscriber, type: string = 'any') {
    const subscribers = this.subscribers[type]
    if (subscribers && subscribers.includes(subscriber)) {
      subscribers.splice(subscribers.indexOf(subscriber), 1)
    }
  }

  publish(type: string = 'any') {
    const subscribers = this.subscribers[type]
    if (subscribers) {
      subscribers.forEach((subscriber) => {
        subscriber()
      })
    }
  }
}
