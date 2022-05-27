import { Pipe, PipeTransform } from '@angular/core';
import { apiUrl, token } from '../Util/Util';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let imageUrl = `${apiUrl}/${args}?${token}`;
    return imageUrl;
  }
}
