//Imports necesarios
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
//Import de Componentes
import {LoginComponent} from "./components/login/login.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";


const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'sign-in', component:SignInComponent},
  {path: '**', component:ErrorComponent}
];

export const appRoutingProviders: any[] =  [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
