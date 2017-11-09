import { MatMenuTrigger } from '@angular/material';
import { Component, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MegaMenuComponent {
  @Input()
  items: any;

  @ViewChildren(MatMenuTrigger) triggers;

  constructor() { }

  openMenu(trigger: MatMenuTrigger) {
    this.triggers
      .filter((x: any) => x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
  }

  closeMenu() {
    // this.triggers.forEach(x => x.closeMenu());
  }
}
