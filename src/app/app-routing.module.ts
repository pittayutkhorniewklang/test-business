import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { AllProductComponent } from './allproduct/allproduct.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KidsComponent } from './kids/kids.component';
import { SprunchieComponent } from './sprunchie/sprunchie.component';
import { OriginalComponent } from './original/original.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'newproduct',component:NewproductComponent},
  {path:'allproduct',component:AllProductComponent},
  {path:'productdetail/:id',component:ProductDetailComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'kids',component:KidsComponent},
  {path:'sprunchie',component:SprunchieComponent},
  {path:'original',component:OriginalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
