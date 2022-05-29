import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarDeleteMessageComponent } from './components/car/car-delete-message/car-delete-message.component';
import { CarPopupComponent } from './components/car/car-popup/car-popup.component';
import { CarTableComponent } from './components/car/car-table/car-table.component';
import { DoorDeleteMessageComponent } from './components/door/door-delete-message/door-delete-message.component';
import { DoorPopupComponent } from './components/door/door-popup/door-popup.component';
import { DoorTableComponent } from './components/door/door-table/door-table.component';
import { EngineDeleteMessageComponent } from './components/engine/engine-delete-message/engine-delete-message.component';
import { EnginePopupComponent } from './components/engine/engine-popup/engine-popup.component';
import { EngineTableComponent } from './components/engine/engine-table/engine-table.component';
import { HoodDeleteMessageComponent } from './components/hood/hood-delete-message/hood-delete-message.component';
import { HoodPopupComponent } from './components/hood/hood-popup/hood-popup.component';
import { HoodTableComponent } from './components/hood/hood-table/hood-table.component';
import { NuolaidaDeleteMessageComponent } from './components/nuolaida/nuolaida-delete-message/nuolaida-delete-message.component';
import { NuolaidaPopupComponent } from './components/nuolaida/nuolaida-popup/nuolaida-popup.component';
import { NuolaidaTableComponent } from './components/nuolaida/nuolaida-table/nuolaida-table.component';
import { PavaruDezeDeleteMessageComponent } from './components/pavaruDeze/pavaruDeze-delete-message/pavaruDeze-delete-message.component';
import { PavaruDezePopupComponent } from './components/pavaruDeze/pavaruDeze-popup/pavaruDeze-popup.component';
import { PavaruDezeTableComponent } from './components/pavaruDeze/pavaruDeze-table/pavaruDeze-table.component';
import { SpeakersDeleteMessageComponent } from './components/speakers/speakers-delete-message/speakers-delete-message.component';
import { SpeakersPopupComponent } from './components/speakers/speakers-popup/speakers-popup.component';
import { SpeakersTableComponent } from './components/speakers/speakers-table/speakers-table.component';
import { WheelsDeleteMessageComponent } from './components/wheels-delete-message/wheels-delete-message.component';
import { WheelsPopupComponent } from './components/wheels-popup/wheels-popup.component';
import { WheelsTableComponent } from './components/wheels-table/wheels-table.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCommonModule} from '@angular/material/core';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {MatListModule} from '@angular/material/list';
import { PartListComponent } from './components/part-list/part-list.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatRadioModule} from '@angular/material/radio';
import { RateSellerComponent } from './components/rate-seller/rate-seller.component';



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
    CarTableComponent,
    CarDeleteMessageComponent,
    CarPopupComponent,
    ConfirmationComponent,
    PartListComponent,
    CartComponent,
    PaymentComponent,
    RateSellerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Ratai', component: WheelsTableComponent, pathMatch: 'full'},
      { path: 'Varikliai', component: EngineTableComponent, pathMatch: 'full' },
      { path: 'Koloneles', component: SpeakersTableComponent, pathMatch: 'full' },
      { path: 'Nuolaidos', component: NuolaidaTableComponent, pathMatch: 'full' },
      { path: 'PavaruDezes', component: PavaruDezeTableComponent, pathMatch: 'full' },
      { path: 'Kapotai', component: HoodTableComponent, pathMatch: 'full' },
      { path: 'Durys', component: DoorTableComponent, pathMatch: 'full' },
      { path: 'Automobiliai', component: CarTableComponent, pathMatch: 'full'},
      { path: 'Dalys', component: PartListComponent, pathMatch: 'full'},
      { path: 'Krepselis', component: CartComponent, pathMatch: 'full' },
      { path: 'Moketi', component: PaymentComponent, pathMatch: 'full'},
      { path: 'Vertinti', component: RateSellerComponent, pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatCommonModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
