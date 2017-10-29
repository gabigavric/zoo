import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageOfAnimal) {
    var output: Animal[] = [];

    if(ageOfAnimal==='allAnimals') {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age >= 1 ) {
          output.push(input[i]);
        }
      }
    }else if(ageOfAnimal === 'youngAnimal') {
      for(var i = 0; i < input.length; ++i) {
        if(input[i].age < 3) {
          output.push(input[i]);
        }
      }
      return output;
    }else if(ageOfAnimal === 'oldAnimal') {
      for(var i = 0; i < input.length; ++i) {
        if(input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }
}
