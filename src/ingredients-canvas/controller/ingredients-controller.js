import { Controller } from "../../entities/abstract";

export class IngredientsController extends Controller {
    constructor(element, model) {
        super(element, model)
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.eventEmitter.on('NEW_DATA', e => this.model.updateData(e.detail))
    }
}