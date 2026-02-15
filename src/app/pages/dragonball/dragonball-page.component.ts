import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 8000
    }
  ])

  powerClasses = computed(() => {
    return{
      'text-danger': true
    }
  })
}
