import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { EmployeeServiceService } from './employee-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
