import { Controller } from "../../entities/abstract";
export class RecipesCanvasController extends Controller {
    constructor(element, methods) {
        super(element)
        this.methods = methods
        this.button = element.querySelector('button');
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.button.addEventListener('click', () => this.eventEmitter.emit('open-create-modal'));
        this.eventEmitter.on('MESSAGE_CREATED', e => {    
            this.methods.updateData(e.detail)
            this.eventEmitter.emit('NEW_DATA', this.methods.postData())
        })
    }
}