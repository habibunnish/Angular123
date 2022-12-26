import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldNgIfComponent } from './component1/hello-world-ng-if/hello-world-ng-if.component';
import { HelloWorldComponent } from './component1/hello-world/hello-world.component';
import { ParentToChildComponent } from './component1/parent-to-child/parent-to-child.component';
import { PipesComponent } from './component1/pipes/pipes.component';
import { AdBannerComponent } from './component2/ad-banner/ad-banner.component';
import { AdComponent } from './component2/ad/ad.component';
import { HeroJobAdComponent } from './component2/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './component2/hero-profile/hero-profile.component';
import { EmployeeListComponent } from './component3/employee-list/employee-list.component';
import { FormComponent } from './component3/form/form.component';
import { AsyncObservablePipeComponent } from './component4/async-observable-pipe/async-observable-pipe.component';
import { AsyncPromisePipeComponent } from './component4/async-promise-pipe/async-promise-pipe.component';
import { CustomPipesComponent } from './component4/custom-pipes/custom-pipes.component';
import { ProductComponent } from './component4/product/product.component';
import { StylingComponent } from './component4/styling/styling.component';
import { AfterContentParentComponent } from './component5/after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './component5/after-content/after-content.component';
import { DoCheckParentComponent } from './component5/do-check-parent/do-check-parent.component';
import { OnChangesParentComponent } from './component5/on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './component5/on-changes/on-changes.component';
import { SpyComponent } from './component5/spy/spy.component';
import { ChildComponent } from './component6/child/child.component';
import { InspectorComponent } from './component6/inspector/inspector.component';
import { ParentComponent } from './component6/parent/parent.component';
import { BasicCheckComponent } from './componet3/basic-check/basic-check.component';
import { HeroesTspComponent } from './FactoryPattern/heroes-tsp/heroes-tsp.component';

const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'hello-world',component:HelloWorldComponent},
  {path:'hello-world-ng-if',component:HelloWorldNgIfComponent},
  {path:'parent-to-child',component:ParentToChildComponent},
  {path:'pipes',component:PipesComponent},
  {path:'ad',component:AdComponent},
  {path:'ad-banner',component:AdBannerComponent},
  {path:'hero-job-ad',component:HeroJobAdComponent},
  {path:'hero-profile',component:HeroProfileComponent},
  {path:'form',component:FormComponent},
  {path:'Styling',component:StylingComponent},
  {path:'custom-pipes',component:CustomPipesComponent},
  {path:'product',component:ProductComponent},
  {path:'async-promise-pipe',component:AsyncPromisePipeComponent},
  {path:'basic-check',component:BasicCheckComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'on-changes-parent',component:OnChangesParentComponent},
  {path:'on-changes',component:OnChangesComponent},
  {path:'spy',component:SpyComponent},
  {path:'do-check-parent',component:DoCheckParentComponent},
  {path:'after-content',component:AfterContentComponent},
  {path:'after-content-parent',component:AfterContentParentComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'inspector',component:InspectorComponent},
  {path:'async-observable-pipe',component:AsyncObservablePipeComponent},
  {path:'heroes-tsp',component:HeroesTspComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
