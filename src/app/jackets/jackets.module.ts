import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JacketsPageRoutingModule } from './jackets-routing.module';

import { JacketsPage } from './jackets.page';
import {FooterComponent} from '../footer/footer.component'
import {HeaderComponent} from '../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JacketsPageRoutingModule
  ],
  declarations: [JacketsPage,FooterComponent,HeaderComponent]
})
export class JacketsPageModule {}
