import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JacketsPage } from './jackets.page';

const routes: Routes = [
  {
    path: '',
    component: JacketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JacketsPageRoutingModule {}
