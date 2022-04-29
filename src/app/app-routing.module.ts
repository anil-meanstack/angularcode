import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard}from './services/auth.guard';
import {LoginComponent}from './login/login.component';
import {DashboadComponent}from './dashboad/dashboad.component';
import {RouterModule,Routes}from '@angular/router'

const routes : Routes=[
  {path : "", component : LoginComponent, canActivate:[AuthGuard]},
  {path : "dashboad", component : DashboadComponent, canActivate:[AuthGuard]}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
   exports:[RouterModule]
})
export class AppRoutingModule { }
