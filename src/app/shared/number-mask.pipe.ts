import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberMask'
})
export class NumberMaskPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    const visibleDigits = 4;
    let maskedSection = phoneNumber.slice(0, -visibleDigits);
    let visibleSection = phoneNumber.slice(-visibleDigits);
    return maskedSection.replace(/./g, '*') + visibleSection;
  }
}