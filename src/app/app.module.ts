import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ExchangeItemComponent } from './components/exchange-item/exchange-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent } from './components/about/about.component';
import { AddExchangeComponent } from './components/add-exchange/add-exchange.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from "@angular/material/list";
import {LoginComponent } from './components/login/login.component';
import {AuthenticationGuard} from "./services/AuthenticationGuard";

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: ExchangeComponent, canActivate: [AuthenticationGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard]},
  {path: 'add', component: AddExchangeComponent, canActivate: [AuthenticationGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExchangeComponent,
    ExchangeItemComponent,
    AboutComponent,
    AddExchangeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    NoopAnimationsModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
