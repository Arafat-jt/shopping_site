import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomenPageRoutingModule } from './women-routing.module';

import { WomenPage } from './women.page';
import {FooterComponent} from '../footer/footer.component'
import {HeaderComponent} from '../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomenPageRoutingModule
  ],
  declarations: [WomenPage,FooterComponent,HeaderComponent]
})
export class WomenPageModule {}
