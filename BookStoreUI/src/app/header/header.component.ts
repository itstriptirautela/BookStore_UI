import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }
  isLoggedIn = this.userService.isLoggedIn;

  ngOnInit(): void {
  }

  logout() {
    this.userService.Logout();
  }
  login() {
    return this.isLoggedIn;
  }
// navigateTo(){ 
//  this.router.navigate(['./AdminUser']);
// }

}


