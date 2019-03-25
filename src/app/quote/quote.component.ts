import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'life is short, smile while you still have teeth','Author: Sanjay',new Date(2019,2,22) ),
      new Quote(1,'Your life cannot fall apart if you never had it together!','Author: Nicko mann',new Date(2019,2,23) ),
  ]

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isRead,index){
    if (isRead){
      let toDelete=confirm(`Are you sure you want to delete ~${this.quotes[index].name}`)
      if(toDelete){

      this.quotes.splice(index,1);
    }
  }
}
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
