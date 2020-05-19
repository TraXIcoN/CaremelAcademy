import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsortiumNavbarComponent } from './consortium-navbar/consortium-navbar.component';
import { ConsortiumFooterComponent } from './consortium-footer/consortium-footer.component';
import { ConsortiumHomepageComponent } from './consortium-homepage/consortium-homepage.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { CommunicationComponent } from './communication/communication.component';
import { LifescihealthComponent } from './lifescihealth/lifescihealth.component';
import { BankingComponent } from './banking/banking.component';
import { ConsumergsComponent } from './consumergs/consumergs.component';
import { TravelComponent } from './travel/travel.component';
import { AiComponent } from './ai/ai.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { IotComponent } from './iot/iot.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { CloudComponent } from './cloud/cloud.component';
import { DatasciComponent } from './datasci/datasci.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { DigitalComponent } from './digital/digital.component';
import { TechnologyComponent } from './technology/technology.component';
import { OperationsComponent } from './operations/operations.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ConsortiumContactComponent } from './consortium-contact/consortium-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConsortiumNavbarComponent,
    ConsortiumFooterComponent,
    ConsortiumHomepageComponent,
    AutomotiveComponent,
    CommunicationComponent,
    LifescihealthComponent,
    BankingComponent,
    ConsumergsComponent,
    TravelComponent,
    AiComponent,
    BlockchainComponent,
    IotComponent,
    FutureworkComponent,
    CloudComponent,
    DatasciComponent,
    StrategyComponent,
    ConsultingComponent,
    DigitalComponent,
    TechnologyComponent,
    OperationsComponent,
    ApplicationsComponent,
    ConsortiumContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
