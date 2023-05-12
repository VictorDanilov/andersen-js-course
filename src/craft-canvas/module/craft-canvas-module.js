import { Module } from "../../entities/abstract";
import { CraftController, CraftModel, CraftView } from "../";

export class CraftModule extends Module{
    constructor(observer) {
        super()
        this.craftWrapper = document.querySelector('.craft-canvas');
        this.view = new CraftView(this.craftWrapper);
        this.model = new CraftModel(observer);
        this.controller = new CraftController(this.craftWrapper, this.model);

    }
    subscribe() {
        return [this.controller, this.view]
    }
}