import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [

  {
    path:"",
    loadChildren: ()=> import("./pages/dashboard/dashboard.module").then((m)=>m.DashboardModule)
  },
  {
    path:"field",
    loadChildren: ()=> import("./pages/field/field.module").then((m)=>m.FieldModule)
  }

];

export const Routing: ModuleWithProviders<unknown> = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: "legacy",
  }
);
