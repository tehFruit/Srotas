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
import {MatSelectModule} from '@angular/material/select';

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
import { NuolaidaTableComponent } from './components/nuolaida/nuolaida-table/nuolaida-table.component';
import { NuolaidaDeleteMessageComponent } from './components/nuolaida/nuolaida-delete-message/nuolaida-delete-message.component';
import { NuolaidaPopupComponent } from './components/nuolaida/nuolaida-popup/nuolaida-popup.component';
import { PavaruDezeTableComponent } from './components/pavaruDeze/pavaruDeze-table/pavaruDeze-table.component';
import { PavaruDezeDeleteMessageComponent } from './components/pavaruDeze/pavaruDeze-delete-message/pavaruDeze-delete-message.component';
import { PavaruDezePopupComponent } from './components/pavaruDeze/pavaruDeze-popup/pavaruDeze-popup.component';
import { HoodDeleteMessageComponent } from './components/hood/hood-delete-message/hood-delete-message.component';
import { HoodTableComponent } from './components/hood/hood-table/hood-table.component';
import { HoodPopupComponent } from './components/hood/hood-popup/hood-popup.component';
import { DoorDeleteMessageComponent } from './components/door/door-delete-message/door-delete-message.component';
import { DoorTableComponent } from './components/door/door-table/door-table.component';
import { DoorPopupComponent } from './components/door/door-popup/door-popup.component';
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
    SpeakersDeleteMessageComponent,
    NuolaidaTableComponent,
    NuolaidaDeleteMessageComponent,
    NuolaidaPopupComponent,
    PavaruDezeTableComponent,
    PavaruDezeDeleteMessageComponent,
    PavaruDezePopupComponent,
    HoodDeleteMessageComponent,
    HoodTableComponent,
    HoodPopupComponent,
    DoorDeleteMessageComponent,
    DoorTableComponent,
    DoorPopupComponent,
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
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Ratai', component: WheelsTableComponent, pathMatch: 'full'},
      { path: 'Varikliai', component: EngineTableComponent, pathMatch: 'full' },
      { path: 'Koloneles', component: SpeakersTableComponent, pathMatch: 'full' },
      { path: 'Nuolaidos', component: NuolaidaTableComponent, pathMatch: 'full' },
      { path: 'PavaruDezes', component: PavaruDezeTableComponent, pathMatch: 'full' },
      { path: 'Hood', component: HoodTableComponent, pathMatch: 'full' },
      { path: 'Door', component: DoorTableComponent, pathMatch: 'full' },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
