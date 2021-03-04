import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElecPageRoutingModule } from './elec-routing.module';

import { ElecPage } from './elec.page';
import {FooterComponent} from '../footer/footer.component'
import {HeaderComponent} from '../header/header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElecPageRoutingModule
  ],
  declarations: [ElecPage,FooterComponent,HeaderComponent]
})
export class ElecPageModule {}
