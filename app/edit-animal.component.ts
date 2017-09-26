import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <hr>
      <h3>Edit Animal</h3>
      <div class="form-group well"  id="some-details">
        <label>Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name" class="form-control">
        <label>Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species" class="form-control">
        <label>Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" class="form-control" type="number">
        <label>Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex" class="form-control">
        <label>Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" type="number" class="form-control">
        <label>Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location" class="form-control">
        <label>Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet" class="form-control">
        <label>Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes" class="form-control">
        <label>Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes" class="form-control">
      </div>
      <a href= "#"><button (click)="doneButtonClicked()">Done</button></a>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
