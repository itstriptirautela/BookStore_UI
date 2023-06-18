import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule }from 'ngx-bootstrap/carousel';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { AddNewBookComponent } from './add-new-book/add-new-book.component';

import { AdminUserComponent } from './admin-user/admin-user.component';

import { SearchBookComponent } from './search-book/search-book.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FilterComponent } from './filter/filter.component';

import { BookDetailsComponent } from './book-details/book-details.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DemoComponent } from './demo/demo.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    routing,
    RegisterComponent,
    HeaderComponent,
    AddNewBookComponent,
AdminUserComponent,
SearchBookComponent,
FilterComponent,

BookDetailsComponent,


DeleteBookComponent,
  DemoComponent,
  SideNavComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    Ng2SearchPipeModule,
    CommonModule,
 SidebarModule,
   
],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
