import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgbdCarouselBasic } from './components/carousel/carousel.component'
import { FooterComponent } from './components/footer/footer.component'

import { AppComponent } from './app.component';
import { AppPublicService } from './services/app-public.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PartnerProgrammComponent } from './structure/partner-programm/partner-programm.component';
import { NavbarPartnerProgrammComponent } from './components/navbar-partner-programm/navbar-partner-programm.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProgramComponent } from './structure/partner-programm/program/program.component';
import { ScoreComponent, NgbdModalContent } from './structure/partner-programm/score/score.component';
import { MerchandisingComponent } from './structure/partner-programm/merchandising/merchandising.component';
import { BenefitsComponent } from './structure/partner-programm/benefits/benefits.component';
import { ToolsComponent } from './structure/partner-programm/tools/tools.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NewsComponent } from './components/news/news.component';
import { TableComponent } from './components/table/table.component';
import { GalleryComponent, NgbdModalContentSimple } from './components/gallery/gallery.component';
import { ContactComponent } from './structure/contact/contact.component';
import { RegisterComponent } from './structure/user/register/register.component';
import { LoginComponent } from './structure/user/login/login.component';
import { PasswordChangeComponent } from './structure/user/password-change/password-change.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { PasswordForgetComponent } from './structure/user/password-forget/password-forget.component';
import { PasswordRequestComponent } from './structure/user/password-request/password-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasic,
    FooterComponent,
    NavbarComponent,
    PartnerProgrammComponent,
    NavbarPartnerProgrammComponent,
    LogoComponent,
    ProgramComponent,
    ScoreComponent,
    MerchandisingComponent,
    BenefitsComponent,
    ToolsComponent,
    AccordionComponent,
    NewsComponent,
    TableComponent,
    GalleryComponent,
    NgbdModalContentSimple,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PasswordChangeComponent,
    NgbdModalContent,
    TabsetComponent,
    PaginationComponent,
    PasswordForgetComponent,
    PasswordRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    RecaptchaModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AppPublicService
  ],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent, NgbdModalContentSimple]
})
export class AppModule { }
