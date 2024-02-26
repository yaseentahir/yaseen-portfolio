import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { LeftSidebar } from './core/layout/leftSidebar/left-sidebar.component';
import { AppComponent } from './app.component';
import { HeroSection } from './core/sections/hero/hero-section.component';
import { AboutSection } from './core/sections/about/about-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FooterComponent,
    HeaderComponent,
    LeftSidebar,
    HeroSection,
    CommonModule,
    AboutSection,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
