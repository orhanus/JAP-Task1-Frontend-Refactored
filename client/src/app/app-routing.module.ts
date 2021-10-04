import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './features/shows/show-list/show-list.component';
import { NotFoundComponent } from './shared/errors/not-found/not-found.component';
import { ServerErrorComponent } from './shared/errors/server-error/server-error.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: ShowListComponent },
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
