import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3>Filter Animals</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All</option>
    <option value="youngAnimal">Young</option>
    <option value="oldAnimal">Adult</option>
  </select>

<ul *ngFor='let currentAnimal of childAnimalList | age:filterByAge'>>
  <li>
    <h4>{{currentAnimal.species}}</h4><h5>{{currentAnimal.name}}</h5>

    <h4>Age: {{currentAnimal.age}}</h4>
    <h4>Diet: {{currentAnimal.diet}}</h4>
    <h4>Location: {{currentAnimal.location}}</h4>
    <h4>Number of Caretakers: {{currentAnimal.caretakers}}</h4>
    <h4>Sex: {{currentAnimal.sex}}</h4>
    <h4>likes: {{currentAnimal.likes}}</h4>
    <h4>Dislikes: {{currentAnimal.dislikes}}</h4>

    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

  </li>
</ul>
<hr>
`
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";
  // displayPints: boolean = false;

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
