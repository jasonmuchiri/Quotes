import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(read:boolean){
    this.isRead.emit(read);
  }
    upvotes:number = 0;
    downvotes:number = 0;
    upvote(){
      this.upvotes += 1;
    }
    downvote(){
      this.downvotes += 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
