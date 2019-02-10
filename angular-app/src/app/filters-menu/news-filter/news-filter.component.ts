import { Component, OnInit } from '@angular/core';

export interface Channel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {

  channels: Channel[] = [
    {value: 'All news', viewValue: 'All news'},
    {value: 'CNN', viewValue: 'CNN'},
    {value: 'Mirror', viewValue: 'Mirror'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
