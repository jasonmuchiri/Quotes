import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countvote',
  templateUrl: './countvote.component.html',
  styleUrls: ['./countvote.component.css']
})
export class CountvoteComponent implements OnInit {
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
