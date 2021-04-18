import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './homepage/home.service';
import { HttpClientModule} from '@angular/common/http';

export const MainRoute: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent
},
  {
    path: 'about',
    component: AboutComponent
},


]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoute)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
