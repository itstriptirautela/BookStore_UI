import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() menuState = new EventEmitter();

  constructor() { }
  opened: boolean;
  showMenu = false; /* false by default, since hidden */
  toggleMenu() {
      console.log("inside toggleMenu");
      this.showMenu = !this.showMenu;
      this.menuState.emit(this.showMenu);
   }
  ngOnInit() {
  }

}
