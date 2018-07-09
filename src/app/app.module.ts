import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MiddleBoxComponent } from './middle-box/middle-box.component';
import { BottomCircleComponent } from './bottom-circle/bottom-circle.component';
import { TopCircleComponent } from './top-circle/top-circle.component';
import { PopoverComponent } from './popover/popover.component';
import { ContentmanagerService } from './contentmanager.service';

@NgModule({
  declarations: [
    AppComponent,
    MiddleBoxComponent,
    BottomCircleComponent,
    TopCircleComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ContentmanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
