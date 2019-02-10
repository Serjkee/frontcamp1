import { Component, OnInit } from '@angular/core';

export interface Cards {
  title: string;
  description: string;
  imgPath: string;
  date: string;
}

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  cards: Cards[] = [
    {title: 'Serj', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quos animi quas rerum doloribus quae veritatis enim, laboriosam blanditiis dolores.', imgPath: '../../../assets/images/news.jpg', date: '29.01.2018'},
    {title: 'Conserj', description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Языкового, океана грамматики. Великий его снова напоивший пустился залетают! Имеет!', imgPath: '../../../assets/images/news.jpg', date: '12.02.2018'},
    {title: 'Top author', description: 'Mujer, uno dolor más de poder mismo si. Alveolar amanecer, falda resiliencia renuncia animal dignísimo justo sed culpa explícito vietnamita?', imgPath: '../../../assets/images/news.jpg', date: '07.05.2018'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
