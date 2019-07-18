import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private LoginService: LoginService) {
  }

  ngOnInit() {
  }

  try(formValue) {
    console.log('Try Login : ' + formValue.email);

    this.LoginService.try(formValue.email, formValue.password)
      .subscribe(response => {
        console.log('Try Login Response ');

      });
  }

  git() {
    this.router.navigate(['kayit']);
  }

}
