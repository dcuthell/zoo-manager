import {Component, Input, Output, EventEmitter} from '@angular/core';
import{ Animal } from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <div class="well">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>{{currentAnimal.age}}</li>
          <li>{{currentAnimal.sex}}</li>
          <li>{{currentAnimal.caretakers}}</li>
          <li>{{currentAnimal.location}}</li>
          <li>{{currentAnimal.diet}}</li>
          <li>{{currentAnimal.likes}}</li>
          <li>{{currentAnimal.dislikes}}</li>
          <a href="#some-details">
            <button type="button" (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-default">
              <a class="glyphicon glyphicon-pencil" href="#some-details" >Edit</a>
            </button>
          </a>
          <br>
          <div class="form-group well detail-form"  id="some-details2">
            <label>Name:</label>
            <input [(ngModel)]="currentAnimal.name" class="form-control">
            <label>Species:</label>
            <input [(ngModel)]="currentAnimal.species" class="form-control">
            <label>Age:</label>
            <input [(ngModel)]="currentAnimal.age" class="form-control" type="number">
            <label>Sex:</label>
            <input [(ngModel)]="currentAnimal.sex" class="form-control">
            <label>Caretakers:</label>
            <input [(ngModel)]="currentAnimal.caretakers" type="number" class="form-control">
            <label>Location:</label>
            <input [(ngModel)]="currentAnimal.location" class="form-control">
            <label>Diet:</label>
            <input [(ngModel)]="currentAnimal.diet" class="form-control">
            <label>Likes:</label>
            <input [(ngModel)]="currentAnimal.likes" class="form-control">
            <label>Dislikes:</label>
            <input [(ngModel)]="currentAnimal.dislikes" class="form-control">
            <button class="btn btn-info" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newSex.value, newCaretakers.value, newLocation.value, newDiet.value, newLikes.value, newDislikes.value)">Add</button>
            <a class="btn btn-info" href="#">Cancel</a>
          </div>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
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
