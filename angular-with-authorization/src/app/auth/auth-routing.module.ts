import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginSiteComponent } from './login-site/login-site.component';
import { SecretSiteComponent } from './secret-site/secret-site.component';

const routes: Routes = [
  {path: 'log-in', component: LoginSiteComponent},
  {path: 'secret', component: SecretSiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
