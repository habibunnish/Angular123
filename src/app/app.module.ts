import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './component1/hello-world/hello-world.component';
import { ParentToChildComponent } from './component1/parent-to-child/parent-to-child.component';
import { HelloWorldNgIfComponent } from './component1/hello-world-ng-if/hello-world-ng-if.component';
import { PipesComponent } from './component1/pipes/pipes.component';
import { HeroJobAdComponent } from './component2/hero-job-ad/hero-job-ad.component';
import { AdBannerComponent } from './component2/ad-banner/ad-banner.component';
import { HeroProfileComponent } from './component2/hero-profile/hero-profile.component';
import { AdDirective } from './component2/ad.directive';
import { AdService } from './component2/ad.service';
import { AdComponent } from './component2/ad/ad.component';
import { FormComponent } from './component3/form/form.component';
import { FormsModule } from '@angular/forms';
import { StylingComponent } from './component4/styling/styling.component';
import { CustomPipesComponent } from './component4/custom-pipes/custom-pipes.component';
import { SalutationPipe } from './salutation.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentToChildComponent,
    HelloWorldNgIfComponent,
    PipesComponent,
    HeroJobAdComponent,
    AdBannerComponent,
    HeroProfileComponent,
    AdDirective,
    AdComponent,
    FormComponent,
    StylingComponent,
    CustomPipesComponent,
    SalutationPipe,
    
  

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
