import { Controller } from "../../entities/abstract";

export class CraftController extends Controller {
    constructor(element, model) {
        super(element, model)
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.element.querySelector('.create-item').addEventListener('click', () => {    
            this.model.createItem()
            this.eventEmitter.emit('SHOW_MESSAGE_IN_MODAL', this.model.getItem())
        })
        this.element.querySelector('.clear').addEventListener('click', () => this.model.clearWorkbench())
        this.eventEmitter.on('NEW_DATA', e => this.model.setRecipes(e.detail))
        this.eventEmitter.on('INGREDIENT_DRAGEND', e => this.model.setWorkbench(e.detail));

    }
}