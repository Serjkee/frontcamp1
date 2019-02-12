import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {cards} from '../../mockData';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  public dataObject: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataObject = cards[this.route.snapshot.params['id']];
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
