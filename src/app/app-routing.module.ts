import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HeaderComponent, title:"Home component"},
  {path:'about', component:AboutComponent, title:"About component"},
  {path:'portfolio', component:PortfolioComponent, children:[
    {path:'card', component:CardComponent},
  ],
  title:"Portfolio component"},
  {path:'contact', component:ContactComponent, title:"Contact component"},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
