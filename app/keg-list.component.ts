import {Component, Input} from '@angular/core';
import{ Keg } from './keg.model';

@Component({
  selector:'keg-list',
  template:`
  <div class="well">
    <div class="panel panel-default" *ngFor="let currentKeg of childKegList | funBeers:funBeerInput">
      <div class="panel-heading">{{currentKeg.name}}</div>
      <div class="panel-body">
        <ul>
          <li>{{currentKeg.brand}}</li>
          <li>{{currentKeg.description}}</li>
          <li>ABV: {{currentKeg.abv}}</li>
          <li>{{currentKeg.style}}</li>
          <li>{{currentKeg.amount}}</li>
          <img class="keg-image" src={{getKegImage(currentKeg)}} alt='NOOOO'>
          <p *ngIf="currentKeg.isKicked()">{{currentKeg.isKicked()}}</p>
          <button class="btn btn-success"(click) = "currentKeg.fill16()">Fill Pint</button>
          <button class="btn btn-warning"(click) = "currentKeg.fill32()">Fill 32oz Growler</button>
          <button class="btn btn-danger"(click) = "currentKeg.fill64()">Fill 64oz Growler</button>
          <button type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
          </button>
          <br>
          <div class=" form-group well">
          <label>Name:</label>
          <input [(ngModel)]="currentKeg.name" class="form-control">
          <label>Description:</label>
          <input [(ngModel)]="currentKeg.description" class="form-control">
          <label>Brand:</label>
          <input [(ngModel)]="currentKeg.brand" class="form-control">
          <label>Price:</label>
          <input [(ngModel)]="currentKeg.amount" type="number" class="form-control">
          <label>ABV:</label>
          <input [(ngModel)]="currentKeg.abv" type="number" class="form-control">
          <label>Style:</label>
          <input [(ngModel)]="currentKeg.style" class="form-control">
          <button class="btn btn-info" (click)="submitForm(newName.value, newDescripton.value, newBrand.value, newName.value, newABV.value, newStyle.value)">Add</button>
          <a class="btn btn-info" href="#">Cancel</a></div>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent{
  @Input() childKegList: Keg[];

  funBeerInput: number = 8;

  getKegImage(thisKeg: Keg){
    if(thisKeg.amount > 1587){
      return "./../resources/images/100keg.jpg";
    }
        if(thisKeg.amount > 1190){
      return "./../resources/images/80keg.jpg";
    }
    if(thisKeg.amount > 793){
      return "./../resources/images/60keg.jpg";
    }
    if(thisKeg.amount > 396){
      return "./../resources/images/40keg.jpg";
    }
    if(thisKeg.amount > 198){
      return "./../resources/images/20keg.jpg";
    }
    if(thisKeg.amount > 15){
      return "./../resources/images/10keg.jpg";
    }
    return "./../resources/images/00keg.jpg";
  }

}
