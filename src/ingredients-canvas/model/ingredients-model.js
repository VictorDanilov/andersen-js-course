import { Model } from "../../entities/abstract";

export class IngredientsModel extends Model {
    constructor(observer) {
        super(observer)
        this.ingredients = [];
        this.currentIngredient = null;
        this.target = null;
    }
    updateData(data) {
        this.ingredients = data.map(el => el.components).join().split(',').filterData()
        this.observer.broadcastData({type: 'INGREDIENTS', payload: this.ingredients})
    }
    setCurrentIngredient(ingredient) {
        this.currentIngredient = ingredient;
    }
    setTarget(target) {
        this.target = target;
    }
    getCurrentTarget() {
        return {
            target: this.target,
            currentIngredient: this.currentIngredient
        }
    }
    methods() {
        return {
            updateData: this.updateData,
            setCurrentIngredient: this.setCurrentIngredient,
            setTarget: this.setTarget,
            getCurrentTarget:this.getCurrentTarget
        }
    }
}