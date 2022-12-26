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
import { ProductComponent } from './component4/product/product.component';
import { HighlightDirective } from './highlight.directive';
import { AsyncPromisePipeComponent } from './component4/async-promise-pipe/async-promise-pipe.component';
import { BasicCheckComponent } from './componet3/basic-check/basic-check.component';
import { EmployeeListComponent } from './component3/employee-list/employee-list.component';
 import { AfterContentParentComponent } from './component5/after-content-parent/after-content-parent.component';
import { ChildViewComponent } from './component5/child-view/child-view.component';
// import { ChildComponent } from './component5/child/child.component';
import { DoCheckParentComponent } from './component5/do-check-parent/do-check-parent.component';
import { OnChangesParentComponent } from './component5/on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './component5/on-changes/on-changes.component';
import { AfterContentComponent } from './component5/after-content/after-content.component';
import { SpyComponent } from './component5/spy/spy.component';
import { SpyDirective } from './component5/spy.directive';
import { InspectorComponent } from './component6/inspector/inspector.component';
import { ParentComponent } from './component6/parent/parent.component';
import { ChildComponent } from './component6/child/child.component';
import { AsyncObservablePipeComponent } from './component4/async-observable-pipe/async-observable-pipe.component';
import { HeroListComponent } from './FactoryPattern/hero-list/hero-list.component';
import { HeroesTspComponent } from './FactoryPattern/heroes-tsp/heroes-tsp.component';
import { HeroesComponent } from './FactoryPattern/heroes/heroes.component';




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
    ProductComponent,
    HighlightDirective,
    AsyncPromisePipeComponent,
    BasicCheckComponent,
     EmployeeListComponent,
     AfterContentParentComponent,
     ChildViewComponent,
     ChildComponent,
     DoCheckParentComponent,
     OnChangesParentComponent,
     OnChangesComponent,
     AfterContentComponent,
     SpyComponent,
     SpyDirective,
     DoCheckParentComponent,
     InspectorComponent,
     ParentComponent,
    ChildComponent,
    AsyncObservablePipeComponent,
    HeroListComponent,
    HeroesTspComponent,
    HeroesComponent
   
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
