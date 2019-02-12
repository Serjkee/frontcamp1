import { Component, OnInit } from '@angular/core';
import {channels} from '../mockData';

@Component({
  selector: 'app-filters-menu',
  templateUrl: './filters-menu.component.html',
  styleUrls: ['./filters-menu.component.scss']
})
export class FiltersMenuComponent implements OnInit {

  public channels: any = null;

  constructor() { }

  ngOnInit() {
    this.channels = channels;
  }

}
