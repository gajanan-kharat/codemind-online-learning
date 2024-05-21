import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginLeftComponent } from './login-left/login-left.component';
import { LoginRightComponent } from './login-right/login-right.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CarouselComponent,
    LoginLeftComponent,
    LoginRightComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    ReactiveFormsModule,
    FormsModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
