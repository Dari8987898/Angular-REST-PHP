import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStudentsService } from './get-students.service';
import { TabellaComponent } from './tabella/tabella.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    GetStudentsService,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
