import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { NotFoundService } from '../not-found/services/not-found.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: Date = new Date();

  constructor(
    public router: Router,
    public notFoundService: NotFoundService,
    public appService: AppService,
  ) {
    this.data.setFullYear(1980);
  }

  ngOnInit() {
  }

}
