import { Model } from "../../entities/abstract";

export class CraftModel extends Model {
    constructor(observer) {
        super(observer)
        this.currentItem = null;
        this.recipes = [];
        this.workbench = [];
        this.result = [];
        
    }
    setWorkbench(element) {
        this.workbench.push(element)    
        this.observer.broadcastData({type: 'CRAFT_MODEL',payload: this.workbench})
    }
    clearWorkbench() {
        this.workbench = [];
        this.observer.broadcastData({type: 'CRAFT_MODEL',payload: this.workbench})

    }
    setRecipes(recipes) {
        this.recipes = recipes;
    }
    createItem() {
        const result = []
        this.recipes.forEach(rec => {
            let state = true;
            const recipe = [...rec.components].sort((a, b) => a > b ? 1 : -1);
            const workbench = [...this.workbench].sort((a, b) => a > b ? 1 : -1);
            for(let i = 0; i < recipe.length; i++) {
                if(recipe[i] !== workbench[i]) state = false;
            }
            if(state) {
                this.currentItem = rec.title
                this.result.push(rec.title)
            }
        })
        setTimeout(() => this.currentItem = null, 50)
        this.observer.broadcastData({type: 'CRAFT_MODEL_RESULT', payload: this.result})
    }
    getItem() {

        return {current: this.currentItem, all: this.result};

    }
    methods() {
        return {
            setWorkbench: this.setWorkbench,
            clearWorkbench: this.clearWorkbench,
            createItem: this.createItem,
            setRecipes: this.setRecipes,
            getItem: this.getItem,
        }
    }

}