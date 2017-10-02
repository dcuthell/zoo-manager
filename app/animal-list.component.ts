import {Component, Input, Output, EventEmitter} from '@angular/core';
import{ Animal } from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <div class="well">
    <h3>Make an age selection</h3>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" value="allAges" (click)="onChange($event.target.value)">All Ages</button>
      <button type="button" class="btn btn-default" value="overand2" (click)="onChange($event.target.value)">2 and Over</button>
      <button type="button" class="btn btn-default" value="under2" (click)="onChange($event.target.value)">Under 2</button>
    </div>
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | animalAge:ageFilter">
      <div class="panel-heading">Hi! I'm {{currentAnimal.name}}!</div>
      <div class="panel-body">
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>{{currentAnimal.age}} years old</li>
          <li>{{currentAnimal.sex}}</li>
          <li>{{currentAnimal.caretakers}} caretakers</li>
          <li>{{currentAnimal.location}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
          <a href="#some-details">
            <button type="button" (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-default">
              <a class="glyphicon glyphicon-pencil" href="#some-details" >Edit</a>
            </button>
          </a>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  ageFilter: string = "allAges";

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    alert(optionFromMenu);
    this.ageFilter = optionFromMenu;
  }
  animalAgePipeInput: number = 8;

  // getAnimalImage(thisAnimal: Animal){
  //   if(thisAnimal.amount > 1587){
  //     return "./../resources/images/100animal.jpg";
  //   }
  //       if(thisAnimal.amount > 1190){
  //     return "./../resources/images/80animal.jpg";
  //   }
  //   if(thisAnimal.amount > 793){
  //     return "./../resources/images/60animal.jpg";
  //   }
  //   if(thisAnimal.amount > 396){
  //     return "./../resources/images/40animal.jpg";
  //   }
  //   if(thisAnimal.amount > 198){
  //     return "./../resources/images/20animal.jpg";
  //   }
  //   if(thisAnimal.amount > 15){
  //     return "./../resources/images/10animal.jpg";
  //   }
  //   return "./../resources/images/00animal.jpg";
  // }

}
