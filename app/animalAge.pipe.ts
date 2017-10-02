import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "animalAge",
pure: false
})



export class AnimalAgePipe implements PipeTransform {

  transform(input: Animal[], ageSelection) {
    let output: Animal[] = [];
    if(ageSelection === "under2") {
      for(let i=0; i < input.length; i++){
        if(input[i].age < 2){
          output.push(input[i]);
        }
      }
      return output;
    }
    if(ageSelection === "overand2") {
      for(let i=0; i < input.length; i++){
        if(input[i].age >= 2){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }

}
