import {Component, Input} from '@angular/core';
import{ Animal } from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <div class="well">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | funBeers:funBeerInput">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
        <ul>
          <li>{{currentAnimal.brand}}</li>
          <li>{{currentAnimal.description}}</li>
          <li>ABV: {{currentAnimal.abv}}</li>
          <li>{{currentAnimal.style}}</li>
          <li>{{currentAnimal.amount}}</li>
          <img class="animal-image" src={{getAnimalImage(currentAnimal)}} alt='NOOOO'>
          <p *ngIf="currentAnimal.isKicked()">{{currentAnimal.isKicked()}}</p>
          <button class="btn btn-success"(click) = "currentAnimal.fill16()">Fill Pint</button>
          <button class="btn btn-warning"(click) = "currentAnimal.fill32()">Fill 32oz Growler</button>
          <button class="btn btn-danger"(click) = "currentAnimal.fill64()">Fill 64oz Growler</button>
          <button type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
          </button>
          <br>
          <div class=" form-group well">
          <label>Name:</label>
          <input [(ngModel)]="currentAnimal.name" class="form-control">
          <label>Description:</label>
          <input [(ngModel)]="currentAnimal.description" class="form-control">
          <label>Brand:</label>
          <input [(ngModel)]="currentAnimal.brand" class="form-control">
          <label>Price:</label>
          <input [(ngModel)]="currentAnimal.amount" type="number" class="form-control">
          <label>ABV:</label>
          <input [(ngModel)]="currentAnimal.abv" type="number" class="form-control">
          <label>Style:</label>
          <input [(ngModel)]="currentAnimal.style" class="form-control">
          <button class="btn btn-info" (click)="submitForm(newName.value, newDescripton.value, newBrand.value, newName.value, newABV.value, newStyle.value)">Add</button>
          <a class="btn btn-info" href="#">Cancel</a></div>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];

  funBeerInput: number = 8;

  getAnimalImage(thisAnimal: Animal){
    if(thisAnimal.amount > 1587){
      return "./../resources/images/100animal.jpg";
    }
        if(thisAnimal.amount > 1190){
      return "./../resources/images/80animal.jpg";
    }
    if(thisAnimal.amount > 793){
      return "./../resources/images/60animal.jpg";
    }
    if(thisAnimal.amount > 396){
      return "./../resources/images/40animal.jpg";
    }
    if(thisAnimal.amount > 198){
      return "./../resources/images/20animal.jpg";
    }
    if(thisAnimal.amount > 15){
      return "./../resources/images/10animal.jpg";
    }
    return "./../resources/images/00animal.jpg";
  }

}
