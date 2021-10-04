import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './shows/show-card/show-card.component';
import { ShowListComponent } from './shows/show-list/show-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShowCardComponent,
    ShowListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]

})
export class ShowsModule { }
