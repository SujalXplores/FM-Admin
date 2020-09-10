import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public styleName: string;

  getTheme() {
    this.styleName = localStorage.getItem('selected-theme');
    if (this.styleName) {
      const head = this.document.getElementsByTagName('head')[0];
      let themeLink = this.document.getElementById(
        'client-theme'
      ) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = this.styleName;
      }
      else {
        const style = this.document.createElement('link');
        style.id = 'client-theme';
        style.rel = 'stylesheet';
        style.href = `${this.styleName}`;
        head.appendChild(style);
      }
    }
    else {
      this.styleName = 'deeppurple-amber.css';
      const head = this.document.getElementsByTagName('head')[0];
      let themeLink = this.document.getElementById(
        'client-theme'
      ) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = this.styleName;
      }
      else {
        const style = this.document.createElement('link');
        style.id = 'client-theme';
        style.rel = 'stylesheet';
        style.href = `${this.styleName}`;
        head.appendChild(style);
      }
    }
  }

  setTheme(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    }
    else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }
}
