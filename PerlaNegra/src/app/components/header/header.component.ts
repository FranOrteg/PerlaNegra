import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed: boolean

  constructor() {
    this.isCollapsed = true
  }


  cerrar() {
    this.isCollapsed = !this.isCollapsed;
  }
}

