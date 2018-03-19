export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public author: string, public name: string) {
    this.showDescription = false
   }
}
