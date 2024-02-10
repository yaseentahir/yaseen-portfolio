import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './core/layout/footer.component';
import { HeaderComponent } from './core/layout/header.component';
import { LeftSidebar } from './core/sections/left-sidebar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterComponent, HeaderComponent, LeftSidebar],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
