import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchBooksComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
