export class Animal {
  public amount : number = 1984;
  constructor(public name: string, public description: string, public brand: string, public price: number, public abv: number, public style: string) { }

  fill16(){
    if(this.amount >= 16){
      this.amount -= 16;
    }else{
      console.log("Error: NOT ENOUGH BEER");
    }
  }

  fill32(){
    if(this.amount >= 32){
      this.amount -= 32;
    }else{
      console.log("Error: NOT ENOUGH BEER");
    }
  }

  fill64(){
    if(this.amount >= 64){
      this.amount -= 64;
    }else{
      console.log("Error: NOT ENOUGH BEER");
    }
  }

  isKicked(){
    if(this.amount <= 160 && this.amount > 16){
      return "I'm almost kicked";
    }else if(this.amount < 16){
      return "I'm kicked";
    }else{
      return false;
    }

  }
}
