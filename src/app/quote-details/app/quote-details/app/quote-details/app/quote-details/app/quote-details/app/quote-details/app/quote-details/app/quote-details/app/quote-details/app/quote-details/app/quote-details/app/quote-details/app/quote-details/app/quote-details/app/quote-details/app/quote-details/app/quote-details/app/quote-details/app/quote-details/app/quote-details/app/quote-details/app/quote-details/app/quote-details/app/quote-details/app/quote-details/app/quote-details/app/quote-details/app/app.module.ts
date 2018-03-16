import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { FormDetailsComponent } from './form-details/form-details.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    VoteComponent,
    StrikethroughDirective,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
