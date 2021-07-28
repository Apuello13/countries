import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isDark: boolean = false;
  constructor() { }

  toggleTheme(){
    this.isDark = !this.isDark;
  }

}