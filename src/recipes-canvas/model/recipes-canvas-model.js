import { Model } from "../../entities/abstract";

export class RecipesCanvasModel extends Model {
    constructor(observer) {
        super(observer)
        this.recipes = [];
    }
    updateData(data) {
        if(Array.isArray(data)) {
            this.recipes = data;
            return this.observer.broadcastData({type: 'RECIPES_MODEL', payload: this.recipes})
        }
        if(data.title === null || data.recipes === null) return;
        this.recipes.push(data)
        this.observer.broadcastData({type: 'RECIPES_MODEL', payload: this.recipes})
    }
    postData() {
        return this.recipes
    }
    methods() {
        return {
            updateData: this.updateData,
            postData: this.postData
        }
    }
}