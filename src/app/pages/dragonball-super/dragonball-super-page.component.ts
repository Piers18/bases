import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

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
    }
  ])

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    console.log("Name: "+ newCharacter.name);
    console.log("Power: "+ newCharacter.power);

    this.characters.update(characters => [...characters, newCharacter]);
    this.resetFilds();
  }

  resetFilds() {
    this.name.set('');
    this.power.set(0);
  }

}