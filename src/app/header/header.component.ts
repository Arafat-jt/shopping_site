import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  lighttheme(event){
    console.log(event.detail.checked);
    if (event.detail.checked) {
      document.body.setAttribute('color-theme','light');
    }
    else{
      document.body.setAttribute('color-theme','dark');
    }
  }

  ngOnInit() {}

}
