
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Rose', 'Live and let others live', ),
    new Quote(2, 'Rosie', 'Giving up is not the option'),
    new Quote(3, 'Perez', 'Life is a journey just keep going'),
  ];

  toogleDetails(index) {
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete,index){
     if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].showDescription}`)
         this.quotes.splice(index,1);
         }
         }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
