export class Controller {
    constructor(element, model) {
        this.element = element;
        this.model = model;
        this.eventEmitter = null;
    }
    setEventEmitter(eventEmmiter) {
        this.eventEmitter = eventEmmiter
    }
    setController() {}
}
export class Model {
    constructor(observer) {
        this.observer = observer;
    }
    methods() {}
}
export class View {
    constructor(element) {
        this.element = element;
    }
    render() {}
}
export class Module {

    subscribe() {}
}