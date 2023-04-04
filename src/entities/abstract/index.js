export class Controller {
    constructor(element) {
        this.element = element;
        this.eventEmitter = null;
    }
    setEventEmitter(eventEmmiter) {
        this.eventEmitter = eventEmmiter
    }
    setController() {}
}
export class Model {
    methods() {}
}
export class View {
    constructor(element) {
        this.element = element;
    }
    render() {}
}