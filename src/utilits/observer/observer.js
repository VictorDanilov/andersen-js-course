import { Controller, View } from "../../entities/abstract";

export class Observer {
    constructor(subscribers = []) {
        this.subscribers = subscribers;
    }
    addSubscriber(subscriber) {
        if(Array.isArray(subscriber)) return this.subscribers = [...this.subscribers, ...subscriber]
        this.subscribers.push(subscriber);
    }
    broadcastData(data) {
        this.subscribers.forEach(subscriber => {
            if(subscriber instanceof Controller) {
                subscriber.setController(data)
            }
            if(subscriber instanceof View) {
                subscriber.render(data)
            }
        })
    }
}