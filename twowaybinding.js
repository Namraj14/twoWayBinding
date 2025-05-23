import { LightningElement } from 'lwc';

export default class Twowaybinding extends LightningElement {
    name = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }
}