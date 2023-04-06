import { Model } from "../../entities/abstract";

export class CraftModel extends Model {
    constructor(observer) {
        super(observer)
        this.current = null;
        this.workbench = [];
        
    }
    setWorkbench(element) {
        this.workbench.push(element)    
        this.observer.broadcastData({type: 'CRAFT_MODEL',payload: this.workbench})
    }
    clearWorkbench() {
        this.observer.broadcastData({type: 'CRAFT_MODEL',payload: this.workbench.length = 0})

    }
    methods() {
        return {
            setWorkbench: this.setWorkbench,
            clearWorkbench: this.clearWorkbench
        }
    }

}