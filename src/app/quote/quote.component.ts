
import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Rose','Live once, live well',),
    new Quote(2,'Rose Jacob', 'Giving up is not the option'),
  ];

  toogleDetails(index){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete,index){
   if (isComplete){
       this.quotes.splice(index,1);
       }
       }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
