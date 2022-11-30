import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: "login", loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  {path: "menu", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: "cart", loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
