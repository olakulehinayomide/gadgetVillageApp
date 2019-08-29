import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomePageModule'
      },
      {
        path: 'products/:id',
        loadChildren: './pages/product/product.module#ProductPageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'products/:id/reviews',
        loadChildren: './pages/product-reviews/product-reviews.module#ProductReviewsPageModule'
      }
    ]
  },
  { path: 'login', loadChildren: './pages/account/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/account/register/register.module#RegisterPageModule' },
  { path: 'forgot-password', loadChildren: './pages/account/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
      
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule {}
