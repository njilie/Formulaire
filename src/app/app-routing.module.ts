import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "formulaires", component: FormulairesComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: "**", component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
