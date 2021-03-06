import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <form>
      <h3>Edit an Animal's Information</h3>
      <div *ngIf='childSelectedAnimal'>

      <h3>{{childSelectedAnimal.species}}</h3><h4>{{childSelectedAnimal.name}}</h4>

      <label>Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">

      <label>Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">

      <label>Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">

      <label>Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">

      <label>Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">

      <label>Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">

      <label>Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">

      <label>Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">

      <label>Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      
      </div>
      <button (click)="doneButtonClicked()">Edit</button>
    <hr>
  </form>
  `

})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked () {
    this.doneButtonClickedSender.emit();
  }
}
