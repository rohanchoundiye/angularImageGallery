import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list/image-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ImageListComponent, TableListComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    ImageListComponent,
    TableListComponent,
  ]
})
export class SharedModule { }
