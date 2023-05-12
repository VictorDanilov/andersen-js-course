import { View } from "../../entities/abstract";

export class CreateRecipeView extends View {
    constructor(element) {
        super(element)
        this.message = document.querySelector('.message');
    }
    render({type, payload}) {
        if(type === 'SHOW_MESSAGE') {
            if(!payload.current) {
                this.message = document.querySelector('.message');
                this.message.innerHTML = `Неудачная попытка создания.`
                this.message.classList.add('show')
                return setTimeout(() => this.message.classList.remove('show'), 3000);               
            }
            this.message.innerHTML = `Создано: ${payload.current}`
            this.message.classList.add('show')
            return setTimeout(() => this.message.classList.remove('show'), 3000);
        }
        if(type !== 'CREATE_MODEL') return;

        if(payload) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }
} 