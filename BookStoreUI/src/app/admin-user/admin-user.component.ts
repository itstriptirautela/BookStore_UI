import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  Role: string | null = '';
  constructor(private userService: UserService) {
    this.Role = this.userService.getRole();
    console.log(this.Role);
  }

  ngOnInit(): void {
  }

}
