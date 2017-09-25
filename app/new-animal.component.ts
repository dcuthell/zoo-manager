import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `<div class="hidden-pane form-group well" id='hidden'><label>Name:</label>
  <input #newName class="form-control">
  <label>Species:</label>
  <input #newSpecies class="form-control">
  <label>Age:</label>
  <input #newAge type="number" class="form-control">
  <label>Sex:</label>
  <input #newSex class="form-control">
  <label>Caretakers:</label>
  <input #newCaretakers type="number" class="form-control">
  <label>Location:</label>
  <input #newLocation class="form-control">
  <label>Diet:</label>
  <input #newDiet class="form-control">
  <label>Likes:</label>
  <input #newLikes class="form-control">
  <label>Dislikes:</label>
  <input #newDislikes class="form-control">
  <button class="btn btn-info" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newSex.value, newCaretakers.value, newLocation.value, newDiet.value, newLikes.value, newDislikes.value)">Add</button>
  <a class="btn btn-info" href="#">Cancel</a></div>


  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, sex: string, caretakers: number, location:string, diet: string, likes: string, dislikes: string) {
    let trimString = name.trim();
    if(trimString.length <= 0){
      alert("Please fill out all fields for new animal");
    }else{
      let newAnimalToAdd: Animal = new Animal(name, species, age, sex, caretakers, location, diet, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
   }
}
