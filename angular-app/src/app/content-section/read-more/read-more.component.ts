import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContentService } from '../card-content.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  public dataObject: any = null;
  public cardId: any = null;

  constructor(private route: ActivatedRoute, private cordContent: CardContentService) { }

  ngOnInit() {
    this.dataObject = this.cordContent.cards[this.route.snapshot.params['id']];
    this.cardId = this.route.snapshot.params['id'];
  }

  deleteArticle(e) {
    e.preventDefault();
    console.log('deleted!');
  }

}
