export { AppEventEmitter } from './my-event-emitter/my-event-emitter';
export { AppObserver } from './observer/observer';
export { AppLocalStorage } from './app-local-storage/app-local-storage'
Array.prototype.filterData = function() {
    const newArray = [];
    this.forEach(ingredient => {
        if(!newArray.includes(ingredient)) {
            newArray.push(ingredient)
        }
    })
    return newArray
}