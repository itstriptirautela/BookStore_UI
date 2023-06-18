import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';


import { AdminUserComponent } from './admin-user/admin-user.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';

import { SearchBookComponent } from './search-book/search-book.component';
import { FilterComponent } from './filter/filter.component';

import { BookDetailsComponent } from './book-details/book-details.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent },
 {path:'', component:LoginComponent},
 { path: 'Register', component: RegisterComponent },
 {path:'Header',component:HeaderComponent},
 {path:'AdminUser',component:AdminUserComponent},
 {path:'AddNewBook' ,component:AddNewBookComponent},


{path:'SearchBook', component:SearchBookComponent},
{path:'Filter', component:FilterComponent},
{path:'SideNav', component:SideNavComponent},

 //  { path: '**', redirectTo: 'login' },
 {path:'BookDetails/:id', component:BookDetailsComponent},
 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [HomeComponent, LoginComponent, RegisterComponent];