import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { routes } from "./app.routes";
import { PreloadAllModules } from "@angular/router";
import { SplashPage } from "./splash/splash.page";
import { HomePage } from "./home/home.page";

const routes: Routes = [
  { path: '', component: SplashPage },
  { path: 'home', component: HomePage },

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}