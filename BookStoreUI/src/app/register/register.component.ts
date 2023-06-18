import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  LoggedInCheack: boolean = false;
  constructor(private userService: UserService) {
    this.LoggedInCheack = this.userService.isloggedInCheack();
  }

  ngOnInit(): void {}
  Role: string[] = ['Admin', 'User'];
  errMsg = '';
  UserName = localStorage.getItem('UserName');
  UserId = localStorage.getItem('UserId');
  UserEmail = localStorage.getItem('UserEmail');
  UserRole = localStorage.getItem('Role');
  user: any;
  RegisterUser(Userdata: any) {
    this.user = Userdata;
    console.warn(Userdata);

    if (this.LoggedInCheack == false) {
      this.userService.Register(Userdata).subscribe(
        (result) => {
          console.warn(result);
          this.errMsg = 'Registered Successfully ';
        },
        (err) => {
          console.log(err);
          this.errMsg = 'Please Fill the  Fields ';
        }
      );
    } 
    else {
      console.warn(Userdata);
      this.userService.updateUser(Userdata).subscribe(
        (result) => {
          console.warn(result);
          this.errMsg = 'Updated Successfully ';
        },
        (err) => {
          console.log(err);
          this.errMsg = 'Please Fill the  Fields ';
        }
      );
    }
  }
}
