import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
// import { CarouselComponent } from './carousel/carousel.component';
// import { LoginLeftComponent } from './login-left/login-left.component';
// import { LoginRightComponent } from './login-right/login-right.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { AccountComponent } from './account/account.component';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginPageComponent,
    // CarouselComponent,
    // LoginLeftComponent,
    // LoginRightComponent,
   
    LandingPageComponent,
    CourseSectionComponent,
    SearchSectionComponent,
    VideoPlaylistComponent,
    AccountComponent,
    AccountSidebarComponent,

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
