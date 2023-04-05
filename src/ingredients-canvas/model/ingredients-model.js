import { Model } from "../../entities/abstract";

export class IngredientsModel extends Model {
    constructor(observer) {
        super(observer)
        this.ingredients = [];
    }
    updateData(data) {

        this.ingredients = data.reduce((ingredients, recipe) => {
            ingredients.push(...recipe.components)
            return ingredients;
        }, []);
        console.log(this.ingredients)
        this.observer.broadcastData({type: 'INGREDIENTS', payload: this.ingredients})
    }
    methods() {
        return {
            updateData: this.updateData
        }
    }
}