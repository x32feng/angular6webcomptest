import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { NewpageComponent } from './newpage/newpage.component';

@NgModule({
  declarations: [ButtonComponent,NewpageComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent,NewpageComponent]
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
