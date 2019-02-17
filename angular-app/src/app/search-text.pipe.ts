import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(card: any, text: any): any {
    console.log(card, text);
    if ( text) {
      const sortedCards = card.filter( itemCard => {
        console.log(itemCard, itemCard.title.indexOf(text) > -1);
        return itemCard.title.indexOf(text) > -1;

      });
      console.log(sortedCards, card);
      return sortedCards;
    }
    return null;
  }

}
