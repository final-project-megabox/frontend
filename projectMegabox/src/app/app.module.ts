import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { SharedModule } from './shared/shared.module';
import { MainPageModule } from './components/main-page/main-page.module';
import { MyPageModule } from './components/my-page/my-page.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MainPageModule,
    MyPageModule,
    SharedModule,
    ComponentsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
