import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "funBeers",
pure: false
})



export class FunBeerPipe implements PipeTransform {

  transform(input: Animal[], inputVal) {
    let output: Animal[] = [];
    if(inputVal > 0){
      for (var i = 0; i < input.length; i++) {
        if (input[i].abv >= inputVal) {
          output.push(input[i]);
        }
      }
      return output;
    }else{
      return input;
    }
  }

}
