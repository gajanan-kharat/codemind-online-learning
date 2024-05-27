import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'landing-page', component:LandingPageComponent },
  { path: 'playlist/:videoId', component:VideoPlaylistComponent},
  { path: 'account', component:AccountComponent}

  // { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  // { path: 'login-page', component:LoginPageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
