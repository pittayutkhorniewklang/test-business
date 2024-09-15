import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewproductComponent } from './newproduct/newproduct.component';

import { FormsModule } from '@angular/forms';

import { AboutusComponent } from './aboutus/aboutus.component';
import { AllProductComponent } from './allproduct/allproduct.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { KidsComponent } from './kids/kids.component';
import { SprunchieComponent } from './sprunchie/sprunchie.component';
import { OriginalComponent } from './original/original.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    NewproductComponent,
    AllProductComponent,
    ProductDetailComponent,
    AboutusComponent,
    KidsComponent,
    SprunchieComponent,
    OriginalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
