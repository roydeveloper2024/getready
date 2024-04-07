import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { TokenInterceptorService } from './services/tokeninterceptor/tokeninterceptor.service';
//Ngx module
import { FacebookModule } from 'ngx-facebook-fb';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';

import { ConfirmationService } from 'primeng/api';
//Ng material
import { MatSidenavModule } from '@angular/material/sidenav';
//End of material



//Ng bootstrap
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

//Primeng
import { AutoCompleteModule }     from 'primeng/autocomplete';
import { ButtonModule }           from 'primeng/button';//
import { CalendarModule }         from 'primeng/calendar';
import { InputTextModule }        from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

// import { PanelMenuModule }        from 'primeng/panelmenu';
// import { SelectButtonModule }     from 'primeng/selectbutton';
// import { ScrollPanelModule }      from 'primeng/scrollpanel';
import { ToastModule }            from 'primeng/toast';
import { TableModule }            from 'primeng/table';
import { DialogModule }           from 'primeng/dialog';
// import { ConfirmDialogModule }    from 'primeng/confirmdialog';
// import { CheckboxModule }         from 'primeng/checkbox';
import { DropdownModule }         from 'primeng/dropdown';
import { ProgressBarModule }      from 'primeng/progressbar';
// import { KeyFilterModule }        from 'primeng/keyfilter';
import { TabViewModule }          from 'primeng/tabview';
import { TabMenuModule }          from 'primeng/tabmenu';
import { CheckboxModule }         from 'primeng/checkbox';



import { PublicMainComponent } from './public-main/public-main.component';
import { PublicComponent } from './public/public.component';
import { PublicMainMenuComponent } from './public-main-menu/public-main-menu.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from 'primeng/api';


import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NewsComponent } from './news/news.component';
import { StickerComponent } from './sticker/sticker.component';
import { FormComponent } from './form/form.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CovidResponseComponent } from './covid-response/covid-response.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HotToBuyComponent } from './hot-to-buy/hot-to-buy.component';
import { TrainingComponent } from './training/training.component';
import { EmergencyGuideComponent } from './emergency-guide/emergency-guide.component'; // a plugin
import { StepsModule } from 'primeng/steps';
import { SidebarModule } from 'primeng/sidebar';
import { SidecartComponent } from './sidecart/sidecart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductComponent } from './product/product.component';
import { TrainingFormComponent } from './training-form/training-form.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { WhatToDoInAnEmergercyComponent } from './what-to-do-in-an-emergercy/what-to-do-in-an-emergercy.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DonationProgramComponent } from './donation-program/donation-program.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { VideosComponent } from './videos/videos.component';
import { NgImageSliderModule } from 'ng-image-video-gallery';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PublicMainComponent,
    PublicComponent,
    PublicMainMenuComponent,
    AppMenuComponent,
    MainComponent,
    ErrorComponent,
    AccessDeniedComponent,
    AccountSettingComponent,

    HomeComponent,
    NewsComponent,
    StickerComponent,
    FormComponent,
    ServicesComponent,
    ContactComponent,
    AboutUsComponent,
    CovidResponseComponent,
    CareersComponent,
    AboutComponent,
    FaqsComponent,
    HotToBuyComponent,
    TrainingComponent,
    EmergencyGuideComponent,
    SidecartComponent,
    CheckoutComponent,
    ShopComponent,
    SearchFilterPipe,
    ProductComponent,
    TrainingFormComponent,
    LoginComponent,
    SigninComponent,
    WhatToDoInAnEmergercyComponent,
    WelcomePageComponent,
    DonationProgramComponent,
    BeneficiariesComponent,
    VideosComponent,
    ProfileComponent,
    ResetPasswordComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoXyKTZJrMeZtPdZArBzEkmdrZJPYxVC4',
      libraries: ['places']
    }),
    AgmSnazzyInfoWindowModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,

    //Ngx module
    FacebookModule.forRoot(),


    //Ng material
    MatSidenavModule,

    //Ng bootstrap
    NgbCollapseModule,

    //Primeng
    AutoCompleteModule,
    ButtonModule,
    ToastModule,
    TableModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    TabViewModule,
    TabMenuModule,
    CalendarModule,
    InputTextModule,
    FullCalendarModule,
    InputNumberModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    HttpClientModule,
    SidebarModule,

    Ng2SearchPipeModule,
    NgxGalleryModule,

    NgImageSliderModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
