import { Component } from '@angular/core';
import { AnimalListComponent} from './animal-list.component';
import { Animal } from './animal.model';
import {NewAnimalComponent} from './new-animal.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <img src="https://101clipart.com/wp-content/uploads/05/Clip%20Art%20Of%20Zoo%20Animals%2002.jpg" alt="zoo graphic" aria-hidden id="zoo-graphic">
    <h1>{{currentFocus}}</h1>
    <h1>Managing the zoo for the day of: {{month}}/{{day}}/{{year}}</h1>
    <hr>
    <new-animal [childAddingAnimal]="addingAnimal" (newAnimalSender)="addAnimal($event)"></new-animal>
    <hr>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (addClickSender)="addNewAnimal()"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <hr>
  </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Welcome to the Zoo Manager!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;
  addingAnimal: boolean = false;

  masterAnimalList: Animal[] = [
    new Animal('Bobby','Elephant', 3, "Male", 4, 'Elephant Rotunda', 'Vegetarian', 'Butt-scratches', 'Hot Weather'),
    new Animal('Jack','Elephant', 3, "Male", 6, 'Elephant Rotunda', 'Vegetarian', 'Waterfalls', 'Thunderstorms'),
    new Animal('Teddy','Elephant', 3, "Male", 1, 'Elephant Rotunda', 'Vegetarian', 'Beach Balls', 'Loud noises')
  ]


  addNewAnimal(){
    this.addingAnimal = true;
  }

  addAnimal(newAnimalFromChild) {
    this.addingAnimal = false;
    if(newAnimalFromChild != null){
      this.masterAnimalList.push(newAnimalFromChild);
    }
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }




}
