import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: Date = new Date();

  constructor(
    public router: Router
  ) {
    this.data.setFullYear(1980);
  }

  ngOnInit() {
  }

}
