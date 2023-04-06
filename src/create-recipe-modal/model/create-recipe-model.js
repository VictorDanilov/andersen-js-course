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
        this.components = value.toUpperCase();
    }
    postData() {
        if(this.components === null) return
        const components = this.components.split(/\s*,\s*/);
        this.close()
        return {title: this.title, components}
    }
    showMessage(data) {
        console.log(data)
        this.observer.broadcastData({type: 'SHOW_MESSAGE', payload: data})
    }
    methods() {
        return {
            open: this.open,
            close: this.close,
            writeTitle: this.writeTitle,
            writeComponents: this.writeComponents,
            postData: this.postData,
            showMessage: this.showMessage,
        }
    }
    
}