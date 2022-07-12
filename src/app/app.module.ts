import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentsComponent } from './contents/contents.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-rountig.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
