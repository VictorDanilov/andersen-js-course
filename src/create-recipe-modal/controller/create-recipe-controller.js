import { Controller } from "../../entities/abstract";

export class CreateRecipeController extends Controller {
    constructor(element, model) {
        super(element, model)
        this.background = element.querySelector('.bg')
        this.closeButton = element.querySelector('.btn.btn-danger.close');
        this.createButton = element.querySelector('.btn.btn-success.create');
        this.inputs = element.querySelectorAll('input');
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.eventEmitter.on('SHOW_MESSAGE_IN_MODAL', (e) => this.model.showMessage(e.detail))
        this.eventEmitter.on('open-create-modal', () => this.model.open())
        this.inputs.forEach(input => {
            if(input.getAttribute('name') === 'title') {
                input.addEventListener('change', e => this.model.writeTitle(e.target.value))
            } else {
                input.addEventListener('change', e => this.model.writeComponents(e.target.value))
            }
        })
        this.createButton.addEventListener('click', () => this.eventEmitter.emit('LOCAL_STORAGE_DATA', this.model.postData()))
        this.element.addEventListener('click', (e) => e.target.hasAttribute('data-close') && this.model.close())
    }
}