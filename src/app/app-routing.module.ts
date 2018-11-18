import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'movie',
  component: MovieComponent
}, {
  path: 'movie/create',
  component: MovieCreateComponent
},{
  path: 'movie/edit/:id',
  component: MoviesEditComponent
},{
  path: '**',
  redirectTo: 'movie'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
