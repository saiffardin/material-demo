import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSplitModule } from 'angular-split';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NestedTreeComponent } from './nested-tree/nested-tree.component';
import { SplitViewComponent } from './split-view/split-view.component';

@NgModule({
  declarations: [AppComponent, NestedTreeComponent, SplitViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTreeModule,
    MatIconModule,
    AngularSplitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
