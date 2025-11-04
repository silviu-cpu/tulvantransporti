import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { HeroComponent } from './components/hero/hero.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkWithUsComponent,
    HeroComponent,
    InfoCardComponent,
    WhyChooseUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
