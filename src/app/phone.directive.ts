import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor() { }
  @HostListener('input', ['$event'])
  onkeydown(x: KeyboardEvent) {
    const input = x.target as HTMLInputElement;
    if (input.value.length > 10) {
      input.value = input.value.substr(0, 10);
    }
  }
}
