
import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-md-6">
        <h1 class="font2">Animals</h1>
        <h3 class="font2">{{currentFocus}}</h3>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <hr>
      </div>
      <div class="col-md-6">
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'fictional animals zoo'
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Fox', 'Fantastic Mr.Fox', 1, 'Vegan', 'Forest', 3, 'Male', 'Working in Accounting', 'His boss'),
    new Animal('Ocelot', 'Babou', 5, 'Carnivore', 'Mansion', 2, 'Male', 'Whore Island Lacrosse', 'Archer'),
    new Animal('Dog', 'Fang', 1, 'Carnivore', 'Hagrids Hut', 1, 'Male', 'Being Pet', 'Ministry of Magic')
  ];
  
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.unshift(newAnimalFromChild);
  }

}
