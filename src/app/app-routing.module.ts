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
      { path: 'news', component: NewsComponent },
      { path: 'stickers', component: StickerComponent },
      { path: 'forms', component: FormComponent },
      
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
