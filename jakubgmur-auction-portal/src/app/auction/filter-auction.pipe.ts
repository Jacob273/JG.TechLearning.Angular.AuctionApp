import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './auction-item';

@Pipe({
  name: 'filterAuction'
})
// Filtr do tablicy aukcji
export class FilterAuctionPipe implements PipeTransform {

  transform(auctions: AuctionItem[], filterText = ''): AuctionItem[] {
    const lowerFilterText = filterText.toLowerCase();

    return auctions.filter((auction: AuctionItem) => {
      // are we afraid of null?
      return auction.title.toLowerCase().includes(lowerFilterText);
    });
  }

}
