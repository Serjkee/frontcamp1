import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  channels = [
    {value: 'All news', viewValue: 'All news'},
    {value: 'CNN', viewValue: 'CNN'},
    {value: 'Mirror', viewValue: 'Mirror'}
  ];

  constructor() { }
}
