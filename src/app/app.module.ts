import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { AngularSplitModule } from 'angular-split';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NestedTreeComponent } from './nested-tree/nested-tree.component';
import { SplitViewComponent } from './split-view/split-view.component';

import {MatInputModule} from '@angular/material/input';
import { GridsterComponent } from './gridster/gridster.component';

@NgModule({
  declarations: [AppComponent, NestedTreeComponent, SplitViewComponent, GridsterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTreeModule,
    MatIconModule,
    AngularSplitModule,
    MatSidenavModule,
    GridsterModule,
    // MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
