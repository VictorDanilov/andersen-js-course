import { Controller } from "../../entities/abstract";

export class IngredientsController extends Controller {
    constructor(element, model) {
        super(element, model)
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.element.addEventListener('dragstart', e => {
            this.model.setCurrentIngredient(e.target.innerText)
        })
        document.querySelector('.craft-wrapper').addEventListener('dragover', e => this.model.setTarget(e.target.className))
        document.querySelector('.craft-wrapper').addEventListener('dragleave', e => {
            e.preventDefault()
            this.model.setTarget(e.target.className)})
        this.element.addEventListener('dragend', () => {
            if(this.model.getCurrentTarget().target === 'craft-wrapper') {
                this.model.setTarget(null)
                this.eventEmitter.emit('INGREDIENT_DRAGEND', this.model.getCurrentTarget().currentIngredient)
            }
        })

        this.eventEmitter.on('NEW_DATA', e => this.model.updateData(e.detail))
    }
}