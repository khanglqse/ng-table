import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { NgTableModule } from 'ang-table';
import { OtherComponnetComponent } from './app/other-componnet/other-componnet.component';

const routes: Routes  = [
  {
    path: '', component: AppComponent,
  }
]

@NgModule({
  declarations: [
    
    AppComponent,
    OtherComponnetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
