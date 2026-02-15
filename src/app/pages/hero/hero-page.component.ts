import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";



@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe]
})
export class HeroPageComponent {
    name: string = 'Ironman';
    age: number = 45;
    
    nameSignal = signal(this.name);
    ageSignal = signal(this.age);

    heroDescription = computed(() => {
        return `${this.nameSignal()} ${this.ageSignal()}`;
    });

    heroDescriptionToUpperCase = computed(() => {
        return this.nameSignal().toUpperCase();
    });

    changeHero() {
        this.nameSignal.set('Spiderman');
        this.ageSignal.set(30);
    }

    changeAge() {
        this.ageSignal.set(60);
    }

    resetForm() {
        this.nameSignal.set(this.name);
        this.ageSignal.set(this.age);
    }
}