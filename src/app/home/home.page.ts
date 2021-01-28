import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public courselist = [];

  constructor(private shoppingservice: ShoppingService) {
    this.shoppingservice.getcatalog().subscribe((res: any) => {
      console.log(res);
      for(let catalogI of res.catalog)
      {
        this.courselist.push
        (
          {
            content: catalogI.description,
            title: catalogI.title,
            imageSource: 'https://www.autonise.com' + catalogI.icon,
            cost: catalogI.cost
          }
        )
      }
    });
  }

  ngOnInit() {
  }

}
