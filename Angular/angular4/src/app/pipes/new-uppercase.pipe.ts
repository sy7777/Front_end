import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newUppercase'
})
export class NewUppercasePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    console.log(args);

    if (value === 'Fred') {
      return `${value}你是一个大傻逼！`
    }
    return value.toUpperCase();
  }

}
