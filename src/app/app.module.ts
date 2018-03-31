import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import {RouterModule,Routes} from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MasterViewComponent } from './master-view/master-view.component';
import {DataService} from './provider/data.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import {FileSizePipe} from './utils/file-size.pipe';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailViewComponent,
    MasterViewComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    LoadersCssModule,
    RouterModule.forRoot([
      {path:'master',component:MasterViewComponent},
      {path:'detail',component:DetailViewComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
