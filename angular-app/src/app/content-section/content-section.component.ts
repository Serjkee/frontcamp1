import { Component, OnInit } from '@angular/core';
import {cards} from '../mockData';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  public cards: any = null;

  constructor() { }

  ngOnInit() {
    this.cards = cards;
  }

}
