import { Controller } from "../../entities/abstract";

export class CreateRecipeController extends Controller {
    constructor(element, methods) {
        super(element)
        this.methods = methods
        this.background = element.querySelector('.bg')
        this.closeButton = element.querySelector('.btn.btn-danger.close');
        this.createButton = element.querySelector('.btn.btn-success.create');
        this.inputs = element.querySelectorAll('input');
    }
    setController(eventEmitter) {
        super.setEventEmitter(eventEmitter)

        this.eventEmitter.on('open-create-modal', () => this.methods.open())
        this.inputs.forEach(input => {
            if(input.getAttribute('name') === 'title') {
                input.addEventListener('change', e => this.methods.writeTitle(e.target.value))
            } else {
                input.addEventListener('change', e => this.methods.writeComponents(e.target.value))
            }
        })
        this.createButton.addEventListener('click', () => this.eventEmitter.emit('MESSAGE_CREATED', this.methods.postData()))
        this.element.addEventListener('click', (e) => e.target.hasAttribute('data-close') && this.methods.close())
    }
}