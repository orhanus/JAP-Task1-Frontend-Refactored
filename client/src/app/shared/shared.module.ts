import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisModule } from 'ngx-ellipsis';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TitleComponent } from './title/title.component';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';



@NgModule({
  declarations: [
    TitleComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    EllipsisModule,
    RatingModule.forRoot(),
    FormsModule,
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  exports: [
    FormsModule,
    RatingModule,
    EllipsisModule,
    TabsModule,
    ToastrModule,
    TitleComponent,
    NotFoundComponent,
    ServerErrorComponent
  ]
})
export class SharedModule { }
