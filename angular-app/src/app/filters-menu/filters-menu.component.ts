import { Component, OnInit } from '@angular/core';
import {FiltersService} from './filters.service';

@Component({
  selector: 'app-filters-menu',
  templateUrl: './filters-menu.component.html',
  styleUrls: ['./filters-menu.component.scss']
})
export class FiltersMenuComponent implements OnInit {

  public channels: any = this.filters.channels;

  constructor(private filters: FiltersService) { }

  ngOnInit() {
  }

}
