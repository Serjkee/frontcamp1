import { Component, OnInit } from '@angular/core';
import { CardContentService } from './card-content.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  public cards: any = this.cardContent.cards;
  public text: any = 'serj';

  constructor(private cardContent: CardContentService) { }

  ngOnInit() {
  }

  deleteArticle(e) {
    e.preventDefault();
    console.log('deleted!');
  }

}
