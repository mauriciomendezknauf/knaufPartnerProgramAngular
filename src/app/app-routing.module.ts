import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerProgrammComponent } from './structure/partner-programm/partner-programm.component';
import { BenefitsComponent } from './structure/partner-programm/benefits/benefits.component';
import { MerchandisingComponent } from './structure/partner-programm/merchandising/merchandising.component';
import { ProgramComponent } from './structure/partner-programm/program/program.component';
import { ScoreComponent } from './structure/partner-programm/score/score.component';
import { ToolsComponent } from './structure/partner-programm/tools/tools.component';
import { ContactComponent } from './structure/contact/contact.component';
// import { RegisterComponent } from './structure/user/register/register.component';
import { LoginComponent } from './structure/user/login/login.component';
import { PasswordChangeComponent } from './structure/user/password-change/password-change.component';
import { PasswordForgetComponent } from './structure/user/password-forget/password-forget.component';
import { PasswordRequestComponent } from './structure/user/password-request/password-request.component';

const appRoutes: Routes = [
  { path: 'partnerprogramm', component: PartnerProgrammComponent },
  { path: 'beneficios', component: BenefitsComponent },
  { path: 'merchandising', component: MerchandisingComponent },
  { path: 'programa', component: ProgramComponent },
  { path: 'puntaje', component: ScoreComponent },
  { path: 'marketing-tools', component: ToolsComponent },
  // { path: 'registro/:token', component: RegisterComponent },
  { path: 'ingreso', component: LoginComponent },
  { path: 'cambioclave', component: PasswordChangeComponent },
  { path: 'forgetpassword', component: PasswordForgetComponent },
  { path: 'requestpassword/:token', component: PasswordRequestComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
  { path: '**', redirectTo: '/ingreso', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
