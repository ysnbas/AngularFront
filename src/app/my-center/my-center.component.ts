import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  giris() {
    this.router.navigate(['home']);

  }

}
