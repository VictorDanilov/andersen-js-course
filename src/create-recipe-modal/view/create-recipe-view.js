import { View } from "../../entities/abstract";

export class CreateRecipeView extends View {
    constructor(element) {
        super(element)
    }
    render({type, payload}) {
        if(type === 'SHOW_MESSAGE') {
            if(!payload) {
                const message = document.querySelector('.message');
                message.innerHTML = `Неудачная попытка создания.`
                message.classList.add('show')
                return setTimeout(() => message.classList.remove('show'), 3000);               
            }
            const message = document.querySelector('.message');
            message.innerHTML = `Создано: ${payload}`
            message.classList.add('show')
            return setTimeout(() => message.classList.remove('show'), 3000);
        }
        console.log(type)
        if(type !== 'CREATE_MODEL') return;

        if(payload) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }
} 