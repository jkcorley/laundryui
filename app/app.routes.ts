import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [authGuard]
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.page').then(m => m.SigninPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage),
    canActivate: [authGuard]
  },
  {
    path: 'my-orders',
    loadComponent: () => import('./pages/my-orders/my-orders.page').then(m => m.MyOrdersPage),
    canActivate: [authGuard]
  },
  {
    path: 'select-clothes',
    loadComponent: () => import('./pages/select-clothes/select-clothes.page').then(m => m.SelectClothesPage),
    canActivate: [authGuard]
  },
  {
    path: 'select-date',
    loadComponent: () => import('./pages/select-date/select-date.page').then(m => m.SelectDatePage),
    canActivate: [authGuard]
  },
  {
    path: 'select-address',
    loadComponent: () => import('./pages/select-address/select-address.page').then(m => m.SelectAddressPage),
    canActivate: [authGuard]
  },
  {
    path: 'add-address',
    loadComponent: () => import('./pages/add-address/add-address.page').then(m => m.AddAddressPage),
    canActivate: [authGuard]
  },
  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment.page').then(m => m.PaymentPage),
    canActivate: [authGuard]
  },
  {
    path: 'order-confirmed',
    loadComponent: () => import('./pages/order-confirmed/order-confirmed.page').then(m => m.OrderConfirmedPage),
    canActivate: [authGuard]
  },
  {
    path: 'notifications',
    loadComponent: () => import('./pages/notifications/notifications.page').then(m => m.NotificationsPage),
    canActivate: [authGuard]
  },
  {
    path: 'offers',
    loadComponent: () => import('./pages/offers/offers.page').then(m => m.OffersPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.page').then(m => m.TermsPage)
  }
]; 