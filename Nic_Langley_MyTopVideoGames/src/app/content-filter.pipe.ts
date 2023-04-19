import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
  pure: false
})
export class ContentFilterPipe implements PipeTransform {
  
  transform(games: Content[], filterType?: string) {
    if (!filterType) {
      return games.filter(c => c.type == undefined)
    }
    else{
      return games.filter(c => c.type == filterType);
    }
  }

}
