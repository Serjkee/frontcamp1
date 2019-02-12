import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveNews(e) {
    e.preventDefault();
    console.log('saved!');
  }

  cancelNews(e) {
    e.preventDefault();
    console.log('canceled!');
  }

}
