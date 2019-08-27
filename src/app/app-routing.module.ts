import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { AuthService } from "./shared/service/auth.service";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "auth/signin" },
    // {
    //     path: "welcome",
    //     loadChildren: "./modules/welcome/welcome.module#WelcomeModule",
    // },
    {
        path: "auth",
        loadChildren: "./pages/auth/auth.module#AuthModule",
    },
    {
        path: "dashboard",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        // canActivate: [AuthService],
    },
    {
        path: "access",
        loadChildren: "./pages/access/access.module#AccessModule",
        // canActivate: [AuthService],
    },
    {
        path: "profile",
        loadChildren: "./pages/profile/profile.module#ProfileModule",
        // canActivate: [AuthService],
    },
    {
        path: "admin",
        loadChildren: "./pages/admin/admin.module#AdminModule",
        // canActivate: [AuthService],
    },
    {
        path: "property",
        loadChildren: "./pages/property/property.module#PropertyModule",
        // canActivate: [AuthService],
    },
    {
        path: "booking",
        loadChildren: "./modules/bookings/bookings.module#BookingsModule",
        // canActivate: [AuthService],
    },
    {
        path: "feedback",
        loadChildren: "./pages/feedback/feedback.module#FeedbackModule",
        // canActivate: [AuthService],
    },
    {
        path: "expenses",
        loadChildren: "./pages/expenses/expenses.module#ExpensesModule",
        // canActivate: [AuthService],
    },
    {
        path: "support",
        loadChildren: "./pages/support/support.module#SupportModule",
        // canActivate: [AuthService],
    },
    {
        path: "corporate",
        loadChildren: "./pages/corporate-booking/corporate.module#CorporateModule",
        // canActivate: [AuthService],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

