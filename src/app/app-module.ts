import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuList } from './menu-list/menu-list';
import { NavBar } from './nav-bar/nav-bar';
import { MenuListComponent } from './menu-list-component/menu-list-component';

@NgModule({
  declarations: [
    App,
    MenuList,
    NavBar,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
