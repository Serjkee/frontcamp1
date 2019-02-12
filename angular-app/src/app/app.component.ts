import { Component } from '@angular/core';

export interface Channel {
  value: string;
  viewValue: string;
}

export interface Cards {
  title: string;
  description: string;
  imgPath: string;
  date: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  channels: Channel[] = [
    {value: 'All news', viewValue: 'All news'},
    {value: 'CNN', viewValue: 'CNN'},
    {value: 'Mirror', viewValue: 'Mirror'}
  ];

  cards: Cards[] = [
    {title: 'Serj', description: 'Loriis dolores.', imgPath: '../../../assets/images/news.jpg', date: '29.01.2018'},
    {title: 'Conserj', description: 'Далеко-дкий его снмеет!', imgPath: '../../../assets/images/news.jpg', date: '12.02.2018'},
    {title: 'Top author', description: 'Mujer, uno dolormita?', imgPath: '../../../assets/images/news.jpg', date: '07.05.2018'}
  ];

}
