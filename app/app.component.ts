import { Component } from '@angular/core';
import { AnimalListComponent} from './animal-list.component';
import { Animal } from './animal.model';
import {NewAnimalComponent} from './new-animal.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentFocus}}</h1>
    <h1>{{month}}/{{day}}/{{year}}</h1>
    <hr>
    <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    <a class="btn btn-info" href="#hidden">Add a new beer</a>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Animalg\'s n\' Eggs';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterAnimalList: Animal[] = [
    new Animal('Play Wave','With Mosaic, Galaxy, and Centennial hops added at the tail end, this easy-drinking NW Pale Ale is a tidal wave of citrusy goodness, without the bitter wipeout.','Crux',0.30,5.00,'Pale Ale'),
    new Animal('French Connection','The hops used for this beer are French experimental hops grown in the Alsace region. Hop character is fresh and lively. You get an intense double IPA that tastes like no other','Crux',0.8,9,'IPA'),
    new Animal('P.B.R. 1844','Brewed with German caramel malt (NO rice, all-malt) and American cascade hops. Aged in new American oak barrels.','PBR',.25,6,'English Pale Ale'),
    new Animal('420 Extra Pale Ale','A tasty West Coast style Extra Pale Ale accentuated with a stimulating hop character. First conceived in our bat cave on 4/20, this kind of beer keeps the wheels on the bus going round and round!','Sweet Water Brewing',.25,5.7,'Pale Ale'),
    new Animal('5th Anniversary Chocolate Raspberry Imperial Stout','Our 5th Anniversary beer is a dark and decadent imperial stout fermented with raspberries and finished on cocoa nibs and a touch of vanilla','West Brook Brewing Company',0.5,10,'English Pale Ale'),
    new Animal('Dirty Bastard','So good it’s almost wrong. Dark ruby in color and brewed with seven varieties of imported malts. Complex in finish, with hints of smoke and peat, paired with a malty richness and a right hook of hop power to give it the bad attitude that a beer named Dirty Bastard has to live up to. Ain’t for the wee lads.','Founders Brewing Company',4,4,'American Pale Ale')];
  selectedAnimal: Animal = null;

  addAnimal(newBeerFromChild: Animal) {
    this.masterAnimalList.push(newBeerFromChild);
  }
}
