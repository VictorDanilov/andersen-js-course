import { Model } from "../../entities/abstract";

export class CreateRecipeModel extends Model {
    constructor(observer) {
        super(observer)
        this.title = null;
        this.components = null;
        this.isOpen = false;
    }
    open() {

        this.isOpen = true;
        this.observer.broadcastData({type: 'CREATE_MODEL', payload: this.isOpen})
    }
    close() {
        this.isOpen = false;
        this.observer.broadcastData({type: 'CREATE_MODEL', payload: this.isOpen})        
    }
    writeTitle(value) {
        this.title = value;
    }
    writeComponents(value) {
        this.components = value;
    }
    postData() {
        if(this.components === null) return
        const components = this.components.split(',');
        this.close()
        return {title: this.title, components}
    }
    methods() {
        return {
            open: this.open,
            close: this.close,
            writeTitle: this.writeTitle,
            writeComponents: this.writeComponents,
            postData: this.postData,
        }
    }
    
}