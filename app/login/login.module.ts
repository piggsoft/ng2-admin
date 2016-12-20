/**
 * Created by piggs on 2016/12/20.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './index';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
