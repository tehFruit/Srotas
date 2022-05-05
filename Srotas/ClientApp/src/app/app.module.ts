import { Wheels } from './models/Wheels';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WheelsTableComponent } from './components/wheels-table/wheels-table.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WheelsPopupComponent } from './components/wheels-popup/wheels-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WheelsDeleteMessageComponent } from './components/wheels-delete-message/wheels-delete-message.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { EngineTableComponent } from './components/engine/engine-table/engine-table.component';
import { EngineDeleteMessageComponent } from './components/engine/engine-delete-message/engine-delete-message.component';
import { EnginePopupComponent } from './components/engine/engine-popup/engine-popup.component';
import { SpeakersTableComponent } from './components/speakers/speakers-table/speakers-table.component';
import { SpeakersPopupComponent } from './components/speakers/speakers-popup/speakers-popup.component';
import { SpeakersDeleteMessageComponent } from './components/speakers/speakers-delete-message/speakers-delete-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    WheelsTableComponent,
    WheelsPopupComponent,
    WheelsDeleteMessageComponent,
    EngineTableComponent,
    EngineDeleteMessageComponent,
    EnginePopupComponent,
    SpeakersTableComponent,
    SpeakersPopupComponent,
    SpeakersDeleteMessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Ratai', component: WheelsTableComponent, pathMatch: 'full'},
      { path: 'Varikliai', component: EngineTableComponent, pathMatch: 'full' },
      { path: 'Koloneles', component: SpeakersTableComponent, pathMatch: 'full' },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
