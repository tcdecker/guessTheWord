import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@capacitor/splash-screen";
import { FlashCardComponent } from "./flash-card/flash-card.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ErrorHandler } from "@angular/core";
import { AppComponent } from "./app.component";
import { IonicRouteStrategy } from "@ionic/angular";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { NgModel } from "@angular/forms";
import { SplashPage } from "./splash/splash.page";



@NgModule({
declarations: [AppComponent, FlashCardComponent],
entryComponents: [],
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
providers: [SplashPage],
bootstrap: [AppComponent]

})
export class AppModule{}