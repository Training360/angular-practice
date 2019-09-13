import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { SortbynamePipe } from './pipe/sortbyname.pipe'
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortbynamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
