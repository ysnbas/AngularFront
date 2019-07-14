import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyHeaderComponent} from './my-header/my-header.component';
import {MyFooterComponent} from './my-footer/my-footer.component';
import {HttpClientModule} from '@angular/common/http';
import { MyCenterComponent } from './my-center/my-center.component';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyCenterComponent,
    MyHomePageComponent
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
export class AppModule {
}
