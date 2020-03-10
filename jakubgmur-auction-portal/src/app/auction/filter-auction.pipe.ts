import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './auction-item';

@Pipe({
  name: 'filterAuction'
})
export class FilterAuctionPipe implements PipeTransform {

  transform(value: AuctionItem[], filterText = ''): AuctionItem[] {
    return [];
  }

}
