import { ModuleWithProviders, NgModule } from '@angular/core';
import { ItemFilmComponent } from './components/item-film/item-film.component';


const COMPONENTS = [ ItemFilmComponent ];

@NgModule({
  imports: [],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [],
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ShareModule,
      providers: [],
    };
  }
}
