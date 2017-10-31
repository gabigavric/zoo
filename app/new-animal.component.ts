import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
      <h3>Add a New Animal</h3>

       <label>Species:</label>
       <input #newSpecies>
       <br>

       <label>Name:</label>
       <input #newName>
       <br>

       <label>Age:</label>
       <input #newAge>
       <br>

       <label>Diet:</label>
       <input #newDiet>
       <br>

       <label>Location:</label>
       <input #newLocation>
       <br>

       <label>Number of Cretakers:</label>
       <input #newCaretakers>
       <br>

       <label>Sex:</label>
       <input #newSex>
       <br>

       <label>Likes:</label>
       <input #newLikes>
       <br>

       <label>Dislikes:</label>
       <input #newDislikes>
       <br>
       <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
