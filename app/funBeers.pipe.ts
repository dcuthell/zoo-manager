import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';


@Pipe({
  name: "funBeers",
pure: false
})



export class FunBeerPipe implements PipeTransform {

  transform(input: Keg[], inputVal) {
    let output: Keg[] = [];
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
