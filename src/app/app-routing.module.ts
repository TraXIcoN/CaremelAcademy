import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

/****************************Consortium Imports*******************************************/
import { ConsortiumNavbarComponent } from './consortium-navbar/consortium-navbar.component';
import { ConsortiumFooterComponent } from './consortium-footer/consortium-footer.component';

/****************************Consortium Industries****************************************/
import { ConsortiumHomepageComponent } from './consortium-homepage/consortium-homepage.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { CommunicationComponent } from './communication/communication.component';
import { LifescihealthComponent } from './lifescihealth/lifescihealth.component';
import { BankingComponent } from './banking/banking.component';
import { ConsumergsComponent } from './consumergs/consumergs.component';
import { TravelComponent } from './travel/travel.component';
/****************************Consortium Industries end*************************************/

/****************************Consortium Insights*******************************************/
import { AiComponent } from './ai/ai.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { IotComponent } from './iot/iot.component';
import { FutureworkComponent } from './futurework/futurework.component';
import { CloudComponent } from './cloud/cloud.component';
import { DatasciComponent } from './datasci/datasci.component';
/****************************Consortium Insights end***************************************/

/****************************Consortium Buisness*******************************************/
import { StrategyComponent } from './strategy/strategy.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { DigitalComponent } from './digital/digital.component';
import { TechnologyComponent } from './technology/technology.component';
import { OperationsComponent } from './operations/operations.component';
import { ApplicationsComponent } from './applications/applications.component';
/****************************Consortium Buisness end***************************************/

import { ConsortiumContactComponent } from './consortium-contact/consortium-contact.component';
/****************************Consortium Imports end****************************************/

/****************************Products Imports start****************************************/
import { ProductsComponent } from './products/products.component';
/****************************Products Imports end******************************************/



const routes: Routes = [
  { path: 'homepage', pathMatch: 'full', component: HomepageComponent },
  { path: './navbar/navbar.component', component: NavbarComponent},
  { path: './footer/footer.component', component: FooterComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'consortium-navbar', component: ConsortiumNavbarComponent },
  { path: 'consortium-footer', component: ConsortiumFooterComponent },
  { path: 'consortium-homepage', component: ConsortiumHomepageComponent },
  { path: 'automotive', component: AutomotiveComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'lifescihealth', component: LifescihealthComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'consumer', component: ConsumergsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'ai', component: AiComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'iot', component: IotComponent },
  { path: 'futureworkforce', component: FutureworkComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'data-science', component: DatasciComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'operations', component: OperationsComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'consortium-contact', component: ConsortiumContactComponent },
  { path: 'products', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ContactusComponent,
  HomepageComponent,
  NavbarComponent,
  AboutusComponent,
  FooterComponent,
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
  ConsortiumContactComponent,
  ProductsComponent,
]
