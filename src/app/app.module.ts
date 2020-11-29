import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [{ provide: 'API_URL', useValue: environment.api }],
  bootstrap: [AppComponent],
})
export class AppModule {}
