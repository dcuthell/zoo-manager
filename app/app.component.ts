import { Component } from '@angular/core';
import { KegListComponent} from './keg-list.component';
import { Keg } from './keg.model';
import {NewKegComponent} from './new-keg.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentFocus}}</h1>
    <h1>{{month}}/{{day}}/{{year}}</h1>
    <hr>
    <keg-list [childKegList]="masterKegList"></keg-list>
    <a class="btn btn-info" href="#hidden">Add a new beer</a>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Kegg\'s n\' Eggs';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterKegList: Keg[] = [
    new Keg('Play Wave','With Mosaic, Galaxy, and Centennial hops added at the tail end, this easy-drinking NW Pale Ale is a tidal wave of citrusy goodness, without the bitter wipeout.','Crux',0.30,5.00,'Pale Ale'),
    new Keg('French Connection','The hops used for this beer are French experimental hops grown in the Alsace region. Hop character is fresh and lively. You get an intense double IPA that tastes like no other','Crux',0.8,9,'IPA'),
    new Keg('P.B.R. 1844','Brewed with German caramel malt (NO rice, all-malt) and American cascade hops. Aged in new American oak barrels.','PBR',.25,6,'English Pale Ale'),
    new Keg('420 Extra Pale Ale','A tasty West Coast style Extra Pale Ale accentuated with a stimulating hop character. First conceived in our bat cave on 4/20, this kind of beer keeps the wheels on the bus going round and round!','Sweet Water Brewing',.25,5.7,'Pale Ale'),
    new Keg('5th Anniversary Chocolate Raspberry Imperial Stout','Our 5th Anniversary beer is a dark and decadent imperial stout fermented with raspberries and finished on cocoa nibs and a touch of vanilla','West Brook Brewing Company',0.5,10,'English Pale Ale'),
    new Keg('Dirty Bastard','So good it’s almost wrong. Dark ruby in color and brewed with seven varieties of imported malts. Complex in finish, with hints of smoke and peat, paired with a malty richness and a right hook of hop power to give it the bad attitude that a beer named Dirty Bastard has to live up to. Ain’t for the wee lads.','Founders Brewing Company',4,4,'American Pale Ale')];
  selectedKeg: Keg = null;

  addKeg(newBeerFromChild: Keg) {
    this.masterKegList.push(newBeerFromChild);
  }
}
