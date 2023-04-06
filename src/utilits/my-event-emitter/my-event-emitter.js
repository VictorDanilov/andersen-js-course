export class AppEventEmitter {
    constructor() {
        this.d = document;
    }
    emit(event, data) {
        document.dispatchEvent(new CustomEvent(event, {detail: data}))
    }
    on(event, onHandler) {
        document.addEventListener(event, onHandler)
    }
}