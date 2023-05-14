import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { compileClassMetadata } from '@angular/compiler';
import { LoginComponent } from './login/login';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'main', loadChildren: () => import ('./main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
