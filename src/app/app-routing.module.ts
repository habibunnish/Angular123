import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BasicsComponent } from './component1/basics/basics.component';
import { AdComponent } from './component2/ad/ad.component';
import { EmployeeListComponent } from './component3/employee-list/employee-list.component';
import { SecondBasicsComponent } from './component4/second-basics/second-basics.component';
import { LifeCyclesComponent } from './component5/life-cycles/life-cycles.component';
import { HeroesTspComponent } from './FactoryPattern/heroes-tsp/heroes-tsp.component';
import { DependencyComponent } from './component6/dependency/dependency.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentFormComponent } from './component3/parent-form/parent-form.component';
import { Parent7Component } from './component7/parent7/parent7.component';
import { HttpParentComponent } from './component8/http-parent/http-parent.component';


const routes: Routes = [
  {path:'app',component:AppComponent},

  {path:'ad',component:AdComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'heroes-tsp',component:HeroesTspComponent},
  {path:'basics',component:BasicsComponent},
  {path:'second-basics',component:SecondBasicsComponent},
  {path:'life-cycles',component:LifeCyclesComponent},
  {path:'dependency',component:DependencyComponent},
  {path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'parent-form',component:ParentFormComponent},
  {path:'parent7',component:Parent7Component},
  {path:'http-parent',component:HttpParentComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
