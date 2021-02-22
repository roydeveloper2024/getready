import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


//Ngx module
import { FacebookModule } from 'ngx-facebook-fb';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';


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




import { PublicMainComponent } from './public-main/public-main.component';
import { PublicComponent } from './public/public.component';
import { PublicMainMenuComponent } from './public-main-menu/public-main-menu.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { HomeComponent } from './home/home.component';

import { ProviderBookingComponent } from './provider-booking/provider-booking.component';
import { ProviderCalendarComponent } from './provider-calendar/provider-calendar.component';
import { ProviderOffersComponent } from './provider-offers/provider-offers.component';
import { ProviderProductComponent } from './provider-product/provider-product.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderReviewComponent } from './provider-review/provider-review.component';

 
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NewsComponent } from './news/news.component';
import { StickerComponent } from './sticker/sticker.component';
import { FormComponent } from './form/form.component'; // a plugin


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
    ProviderBookingComponent,
    ProviderCalendarComponent,
    ProviderOffersComponent,
    ProviderProductComponent,
    ProviderProfileComponent,
    ProviderReviewComponent,
    HomeComponent,
    NewsComponent,
    StickerComponent,
    FormComponent
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
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
