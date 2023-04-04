import { Controller } from "../../entities/abstract";
export class RecipesCanvasController extends Controller {
    constructor(element, methods) {
        super(element)
        this.methods = methods
        this.button = element.querySelector('button');
    }
    setController(eventEmitter) {
        super.setEventEmitter(eventEmitter)
        this.button.addEventListener('click', () => this.eventEmitter.emit('open-create-modal'));
        this.eventEmitter.on('MESSAGE_CREATED', e => this.methods.updateData(e.detail))
    }
}