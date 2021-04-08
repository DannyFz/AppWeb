import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { TempComponent } from './components/temp/temp.component';
import { HumedadComponent } from './components/humedad/humedad.component';
import { RegistroComponent } from './components/registro/registro.component';

const rutas:Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dash',
    component:DashComponent
  },
  {
  path:'temp',
  component:TempComponent
  },
  {
    path:'humedad',
    component:HumedadComponent
  },
  {
  path:'registro',
  component:RegistroComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    TempComponent,
    HumedadComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
