import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicMainComponent } from './public-main/public-main.component';
import { PublicComponent } from './public/public.component';
import { PublicMainMenuComponent } from './public-main-menu/public-main-menu.component';
// import { AppMenuComponent } from './app-menu/app-menu.component';
// import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
// import { AccountSettingComponent } from './account-setting/account-setting.component';


import { NewsComponent } from './news/news.component';
import { StickerComponent } from './sticker/sticker.component';
import { FormComponent } from './form/form.component'; // a plugin

import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component'; // a plugin
import { AboutUsComponent } from './about-us/about-us.component'; // a plugin
import { CovidResponseComponent } from './covid-response/covid-response.component'; // a plugin
import { CareersComponent } from './careers/careers.component'; // a plugin
import { AboutComponent } from './about/about.component'; // a plugin

import { FaqsComponent } from './faqs/faqs.component'; // a plugin
import { HotToBuyComponent } from './hot-to-buy/hot-to-buy.component'; // a plugin
import { TrainingComponent } from './training/training.component'; // a plugin
import { EmergencyGuideComponent } from './emergency-guide/emergency-guide.component'; // a plugin
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { TrainingFormComponent } from './training-form/training-form.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

import { WhatToDoInAnEmergercyComponent } from './what-to-do-in-an-emergercy/what-to-do-in-an-emergercy.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { DonationProgramComponent } from './donation-program/donation-program.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { VideosComponent } from './videos/videos.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuardService } from './guard/auth-guard/auth-guard.service';

import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
const routes: Routes = [

  // { path: '', redirectTo: 'home', data: { }, pathMatch: 'full' },


  { path: '',
    component: PublicMainComponent,
    canActivate: [],
    canActivateChild: [  ],
    data: {

    },
    children: [
      { path: '', component: PublicComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'how-to-buy', component: HotToBuyComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'emergency-guide', component: EmergencyGuideComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'shop/:category', component: ShopComponent },
      { path: 'shop/:category/:sub', component: ShopComponent },
      { path: 'product/:prod_id', component: ProductComponent },
      { path: 'training-form', component: TrainingFormComponent },

      { path: 'contact', component: ContactComponent },
      { path: 'signup', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'welcome', component: WelcomePageComponent },

      { path: 'what-to-do-in-an-emergercy', component: WhatToDoInAnEmergercyComponent },

      { path: 'donation-program', component: DonationProgramComponent },
      { path: 'beneficiaries', component: BeneficiariesComponent },

      { path: 'videos', component: VideosComponent },

      { path: 'password/reset/:token', component: ResetPasswordComponent },

      { path: 'forgot-password', component: ForgotpasswordComponent },





      { path: 'profile',
        canActivate: [AuthGuardService],
        component: ProfileComponent
      },









    ]
  },


  {
  	path: 'error',
  	component: ErrorComponent,
  	canActivate: [],
  	resolve: {
    	// cres: ResolverRolesService
  	}
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [],
    resolve: {
      // cres: ResolverRolesService
    }
  },
  {
  	path: '**',
  	component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
