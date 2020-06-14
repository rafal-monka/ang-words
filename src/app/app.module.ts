import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent }  from './test/test.component';


import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { PageComponent } from './page/page.component';
import { WordComponent } from './word/word.component';
import { BackButtonComponent } from './components/back-button';
import { WordInPageComponent } from './components/word-in-page/word-in-page.component';

@NgModule({
   declarations: [
      AppComponent,
      // TestComponent,
      PageComponent,
      WordComponent,
      BackButtonComponent,
      WordInPageComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      HttpErrorHandler,
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
