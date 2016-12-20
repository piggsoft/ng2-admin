import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginRoutes, LoginComponent} from './login/index'

/**
 * 导入的routing有顺序，顺序是由小范围扩展到大范围
 * @type {[any,{path: string; component: LoginComponent}]}
 */
const routes: Routes = [
  ...LoginRoutes,
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
