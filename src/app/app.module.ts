import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';

import {metaReducers, reducers} from './reducers';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppCommonModule} from './common/common.module';
import {SelectorModule} from './selectors/selector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    AppCommonModule,
    SelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
