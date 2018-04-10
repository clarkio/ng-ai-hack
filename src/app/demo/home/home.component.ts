import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  apiTitle = 'Home';
  apiDescription = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit() {}
}
