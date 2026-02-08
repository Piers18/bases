import { Component } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html',
    styles:`
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
    `
})
export class CounterPageComponent {
    counter: number = 10;

    increaseby(value: number) {
        this.counter += value;
    }

    decreaseby(value: number) {
        this.counter -= value;
    }

    resetCounter() {
        this.counter = 10;
    }
}