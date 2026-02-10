import { Component, signal } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html',

})
export class HeroPageComponent {
    name: string = 'Ironman';
    age: number = 45;
    
    nameSignal = signal(this.name);
    ageSignal = signal(this.age);

    getHeroDescription(): string {
        return `${this.nameSignal()} ${this.ageSignal()}`;
    }

    changeHero() {
        this.nameSignal.set('Spiderman');
        this.ageSignal.set(30);
    }

    resetForm() {
        this.nameSignal.set(this.name);
        this.ageSignal.set(this.age);
    }
}