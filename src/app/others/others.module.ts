import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthersPageRoutingModule } from './others-routing.module';

import { OthersPage } from './others.page';
import { FooterComponent } from '../footer/footer.component'
import { HeaderComponent } from '../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthersPageRoutingModule
  ],
  declarations: [OthersPage,FooterComponent,HeaderComponent]
})
export class OthersPageModule {}
