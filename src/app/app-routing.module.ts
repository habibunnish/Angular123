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
import { FormComponent } from './component3/form/form.component';
import { StylingComponent } from './component4/styling/styling.component';

const routes: Routes = [
  
  {path:'hello-world',component:HelloWorldComponent},
  {path:'hello-world-ng-if',component:HelloWorldNgIfComponent},
  {path:'parent-to-child',component:ParentToChildComponent},
  {path:'pipes',component:PipesComponent},
  {path:'ad',component:AdComponent},
  {path:'ad-banner',component:AdBannerComponent},
  {path:'hero-job-ad',component:HeroJobAdComponent},
  {path:'hero-profile',component:HeroProfileComponent},
  {path:'form',component:FormComponent},
  {path:'Styling',component:StylingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
