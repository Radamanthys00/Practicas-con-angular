import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mateial.module';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
