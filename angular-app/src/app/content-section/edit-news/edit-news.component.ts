import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CardContentService} from '../card-content.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {

  public dataObject: any = null;

  constructor(private route: ActivatedRoute, private cardContent: CardContentService) { }

  ngOnInit() {
    this.dataObject = this.cardContent.cards[this.route.snapshot.params['id']];
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
