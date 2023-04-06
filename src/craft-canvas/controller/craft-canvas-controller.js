import { Controller } from "../../entities/abstract";

export class CraftController extends Controller {
    constructor(element, model) {
        super(element, model)
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.element.querySelector('.clear').addEventListener('click', () => this.model.clearWorkbench())
        this.eventEmitter.on('INGREDIENT_DRAGEND', e => this.model.setWorkbench(e.detail));

    }
}