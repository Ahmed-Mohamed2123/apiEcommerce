import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menu', [
      state('true', style({
        maxHeight: '0',
      })),
      state('false', style({
        maxHeight: '450px',
      })),
      transition('true <=> false', animate('210ms'))
    ]),
    trigger('toggle', [
      state('true', style({
        right: '-385px'
      })),
      state('false', style({
        right: '0'
      })),
      transition('true <=> false', animate('250ms'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  current = 'true';
  toggle = 'true';

  constructor() { }

  ngOnInit(): void {
  }

  menu() {
    this.current = this.current === 'true' ? 'false' : 'true';
  }

  itemShow() {
    this.toggle = this.toggle === 'true' ? 'false' : 'true';
  }

}
