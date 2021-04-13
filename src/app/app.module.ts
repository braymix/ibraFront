import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreaNuovoArticoloComponent } from './crea-nuovo-articolo/crea-nuovo-articolo.component';
import { ShopComponent } from './shop/shop.component';
import {ScrollTopModule} from 'primeng/scrolltop';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http'; 
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AboutUsComponent } from './about-us/about-us.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TimelineModule} from 'primeng/timeline';
import { DescrizioneProdottoComponent } from './descrizione-prodotto/descrizione-prodotto.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreaNuovoArticoloComponent,
    ShopComponent,
    AboutUsComponent,
    DescrizioneProdottoComponent,
    PricingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTopModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
    ProgressSpinnerModule,
    AvatarModule,
    AvatarGroupModule,
    TimelineModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
