import { Component, ChangeDetectionStrategy, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html',
    styles:`
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
    `,
})
export class CounterPageComponent {
    counter: number = 10;
    couterSignal = signal(10);

    constructor() {
    }

    increaseby(value: number) {
        this.counter += value;
        this.couterSignal.update(current => current + value);
    }

    resetCounter() {
        this.counter = 0;
        this.couterSignal.set(0);
    }
}