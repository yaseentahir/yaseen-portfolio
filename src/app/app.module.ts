import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './core/layout/footer.component';
import { HeaderComponent } from './core/layout/header.component';
import { LeftSidebar } from './core/layout/left-sidebar.component';
import { AppComponent } from './app.component';
import { HeroSection } from './core/sections/hero/hero-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FooterComponent,
    HeaderComponent,
    LeftSidebar,
    HeroSection,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
