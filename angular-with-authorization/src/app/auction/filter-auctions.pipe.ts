import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './auction-item';

@Pipe({
  name: 'filterAuctions'
  // Złamanie domyślnego zachownania (i obserwacja źródła);
  // pure: false
})
export class FilterAuctionsPipe implements PipeTransform {

  transform(auctions: AuctionItem[], filterText = ''): AuctionItem[] {
    if (!filterText) {
      return auctions;
    }
    const filterTextLower = filterText.toLowerCase();
    return auctions.filter((auction: AuctionItem) => {
      return auction.title.toLowerCase().includes(filterTextLower);
    });
  }

}
