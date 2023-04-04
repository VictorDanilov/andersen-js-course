import { Model } from "../../entities/abstract";

export class RecipesCanvasModel extends Model {
    constructor(observer) {
        super()
        this.observer = observer;
        this.recipes = [];
    }
    updateData(data) {
        if(Array.isArray(data)) {
            this.recipes = data;
            return this.observer.broadcastData(this.recipes)
        }
        if(data.title === null || data.recipes === null) return;
        this.recipes.push(data)
        this.observer.broadcastData(this.recipes)
    }
    methods() {
        return {
            updateData: this.updateData
        }
    }
}