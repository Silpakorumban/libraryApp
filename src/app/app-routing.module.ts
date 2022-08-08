import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path:"signUp", component:SignUpComponent},{path:'update-book',component:UpdateBookComponent,canActivate:[AuthGuard]},{path:'books',component:BooksComponent},{path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},{path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
