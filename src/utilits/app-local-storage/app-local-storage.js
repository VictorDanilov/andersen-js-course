import { Controller } from "../../entities/abstract";

export class AppLocalStorage extends Controller {
    constructor() {
        super()
        this.key = 'recipes'
    }
    setController({type, payload}) {
        if(type !== 'EVENT_EMITTER') return;
        super.setEventEmitter(payload)
        this.eventEmitter.on('NEW_DATA', e => localStorage.setItem(this.key, JSON.stringify(e.detail)))
    }
    getItem() {
        if(localStorage.getItem(this.key)) this.eventEmitter.emit('MESSAGE_CREATED', JSON.parse(localStorage.getItem(this.key)))
    }
    

}