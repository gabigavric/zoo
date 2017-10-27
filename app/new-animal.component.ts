import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

  <h1>Add a new animal</h1>

   <label>Animal species:</label>
   <input #newSpecies>


   <label>Animal name:</label>
   <input #newName>


   <label>Animal age:</label>
   <input #newAge>


   <label>Animal diet:</label>
   <input #newDiet>

   <label>Animal location:</label>
   <input #newLocation>

   <label>Animal caretakers:</label>
   <input #newCaretakers>

   <label>Animal sex:</label>
   <input #newSex>

   <label>Animal likes:</label>
   <input #newLikes>

   <label>Animal dislikes:</label>
   <input #newDislikes>

  <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species,name,age,diet,location,caretakers,sex,likes,dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
