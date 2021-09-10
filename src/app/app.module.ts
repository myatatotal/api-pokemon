import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokepageComponent } from './pokepage/pokepage.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PokepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
