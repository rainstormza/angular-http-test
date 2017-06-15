import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { BookComponent }  from './book.component';
import { BookService } from './book.service';
import { BookData } from './book-data';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule,
		FormsModule,
		InMemoryWebApiModule.forRoot(BookData)
  ],
  declarations: [
        AppComponent,
		BookComponent
  ],
  providers: [
        BookService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
