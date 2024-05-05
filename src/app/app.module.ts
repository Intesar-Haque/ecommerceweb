import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { HomeLeftSideBarComponent } from './home-left-side-bar/home-left-side-bar.component';
import { HomeRightSideBarComponent } from './home-right-side-bar/home-right-side-bar.component';
import { HomePhotoGalleryComponent } from './home-photo-gallery/home-photo-gallery.component';
import { HomeLeftBarWomenComponent } from './home-left-bar-women/home-left-bar-women.component';
import { HomeLeftBarMenComponent } from './home-left-bar-men/home-left-bar-men.component';
import { HomeLeftBarKidComponent } from './home-left-bar-kid/home-left-bar-kid.component';
import {MatDialogModule} from "@angular/material/dialog";
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {RouterModule, Routes} from "@angular/router";
import { HomeAltComponent } from './home-alt/home-alt.component';
import { SecondNavbarComponent } from './second-navbar/second-navbar.component';
import { StoreComponent } from './store/store.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { LookBookComponent } from './look-book/look-book.component';
import { JournalComponent } from './journal/journal.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { HomeLeftBarComponent } from './home-left-bar/home-left-bar.component';

const appRoute: Routes=[
  {path: '', component: HomeComponent},
  {path:"SecondNavbar" , component: SecondNavbarComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLeftSideBarComponent,
    HomeRightSideBarComponent,
    HomePhotoGalleryComponent,
    HomeLeftBarWomenComponent,
    HomeLeftBarMenComponent,
    HomeLeftBarKidComponent,
    HomeNavbarComponent,
    SidebarComponent,
    HomeAltComponent,
    SecondNavbarComponent,
    StoreComponent,
    NewArrivalsComponent,
    LookBookComponent,
    JournalComponent,
    SearchComponentComponent,
    ProductCardsComponent,
    FooterComponent,
    HomeLeftBarComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbar,
        MatButton,
        MatDrawerContainer,
        MatDrawer,
        RouterModule.forRoot(appRoute),
        FormsModule,

    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
