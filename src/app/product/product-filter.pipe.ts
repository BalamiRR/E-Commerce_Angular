import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  //Pipe transfrom bize transform fonksiyonu verir.
  //Bize bi data geliyor ver biz asagida o datayi transforme ediyoruz anlaminda.
  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
} 

