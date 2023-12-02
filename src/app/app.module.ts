import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { ConfirmationMsgComponent } from './components/confirmation-msg/confirmation-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    ConfirmationMsgComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
