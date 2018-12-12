import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page.component';
import { BannerComponent } from './components/banner/banner.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [{
      path: '',
      component: BannerComponent
    }, {
      path: 'detail/:id',
      component: FilmDetailComponent,
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }
