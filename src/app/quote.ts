export class Quote {
  public showDescription:boolean;
  constructor(public id:number, public name:string,public description:string,public createdDate:Date){
    this.showDescription=false
  }
}