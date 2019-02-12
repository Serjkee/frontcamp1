import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {cards} from '../../mockData';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  public dataObject: any = null;
  public cardId: any = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataObject = cards[this.route.snapshot.params['id']];
    this.cardId = this.route.snapshot.params['id'];
  }

  deleteArticle(e) {
    e.preventDefault();
    console.log('deleted!');
  }

}
