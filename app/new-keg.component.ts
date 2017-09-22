import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `<div class="hidden-pane form-group well" id='hidden'><label>Name:</label>
  <input #newName class="form-control">
  <label>Description:</label>
  <input #newDescripton class="form-control">
  <label>Brand:</label>
  <input #newBrand class="form-control">
  <label>Price:</label>
  <input #newPrice type="number" class="form-control">
  <label>ABV:</label>
  <input #newABV type="number" class="form-control">
  <label>Style:</label>
  <input #newStyle class="form-control">
  <button class="btn btn-info" (click)="submitForm(newName.value, newDescripton.value, newBrand.value, newName.value, newABV.value, newStyle.value)">Add</button>
  <a class="btn btn-info" href="#">Cancel</a></div>


  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, description: string, brand: string, price: number, abv: number, style:string) {
    let trimString = name.trim();
    if(trimString.length <= 0){
      alert("Please fill out all fields for new keg");
    }else{
      let newKegToAdd: Keg = new Keg(name, description, brand, price, abv, style );
      this.newKegSender.emit(newKegToAdd);
    }

   }
}
