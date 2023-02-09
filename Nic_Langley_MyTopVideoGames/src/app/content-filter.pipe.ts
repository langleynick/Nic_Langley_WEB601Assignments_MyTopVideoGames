import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(content: Content[], filterType?: string) {
    if (!filterType) {
      return content.filter(c => c.type == undefined)
    }
    else{
      return content.filter(c => c.type == filterType);
    }
  }

}
