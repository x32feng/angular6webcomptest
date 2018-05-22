import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {RouterModule} from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { NewpageComponent } from './newpage/newpage.component';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
@NgModule({
  declarations: [ButtonComponent,NewpageComponent, HomeComponent],
  imports: [BrowserModule,
  RouterModule.forRoot([
      {path: 'newpage',
      component: NewpageComponent},
      {path:'home',
      component:HomeComponent}
  ])],
  entryComponents: [ButtonComponent,NewpageComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    
    customElements.define('custom-button', customButton);
    const newPage = createCustomElement(NewpageComponent, { injector });
    customElements.define('new-page', newPage);
    
  }

  ngDoBootstrap() {}
}
