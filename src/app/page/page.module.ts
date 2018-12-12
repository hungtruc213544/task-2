import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page.routing';

import { PageComponent } from './components/page.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ShareModule } from '../share/share.module';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    ShareModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PageComponent,
    HeaderComponent,
    BannerComponent,
    FilmDetailComponent
  ],
  providers: [],
})
export class PageModule {
}
