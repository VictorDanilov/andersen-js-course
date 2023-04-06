import { Controller } from "../../entities/abstract";
import defaultData from "../../app/defaultData";
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
        if(localStorage.getItem(this.key)) {
            this.eventEmitter.emit('LOCAL_STORAGE_DATA', JSON.parse(localStorage.getItem(this.key))) 
        } else {
            localStorage.setItem(this.key, JSON.stringify(defaultData))  
            this.getItem()          
        }
    }
    

}