import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
// import { ComponentsModule } from "../../components/components.module";
import { AuthService } from "./auth.service";

import { SigninPageComponent } from "./signin-page/signin-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { ResetPasswordPageComponent } from "./reset-password-page/reset-password-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password-page/forgot-password-page.component";
import { AuthComponent } from "../../components/auth/auth.component";

const routes: Routes = [
  { path: "signin", component: SigninPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "resetpassword", component: ResetPasswordPageComponent },
  { path: "forgotpassword", component: ForgotPasswordPageComponent }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  
  declarations: [
    SigninPageComponent,
    SignupPageComponent,
    ResetPasswordPageComponent,
    ForgotPasswordPageComponent,
    AuthComponent
  ],
  providers: [AuthService]
})
export class AuthModule {}
