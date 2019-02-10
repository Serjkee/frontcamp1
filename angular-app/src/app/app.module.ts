import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule, MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityMenuComponent } from './utility-menu/utility-menu.component';
import { UtilityLogoComponent } from './utility-menu/utility-logo/utility-logo.component';
import { UtilityUserComponent } from './utility-menu/utility-user/utility-user.component';
import { SourceSectionComponent } from './source-section/source-section.component';
import { FiltersMenuComponent } from './filters-menu/filters-menu.component';
import { NewsFilterComponent } from './filters-menu/news-filter/news-filter.component';
import { TextFilterComponent } from './filters-menu/text-filter/text-filter.component';
import { NewsSwitcherComponent } from './filters-menu/news-switcher/news-switcher.component';
import { AddNewsComponent } from './filters-menu/add-news/add-news.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { FooterComponent } from './footer/footer.component';
import { NewsCardComponent } from './content-section/news-card/news-card.component';
import { LoadMoreComponent } from './content-section/load-more/load-more.component';
import { UserLoginComponent } from './utility-menu/utility-user/user-login/user-login.component';
import { UserLogoutComponent } from './utility-menu/utility-user/user-logout/user-logout.component';

const router = [
  {path: '', component: AppComponent},
  {path: 'login', component: UserLoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UtilityMenuComponent,
    UtilityLogoComponent,
    UtilityUserComponent,
    SourceSectionComponent,
    FiltersMenuComponent,
    NewsFilterComponent,
    TextFilterComponent,
    NewsSwitcherComponent,
    AddNewsComponent,
    ContentSectionComponent,
    FooterComponent,
    NewsCardComponent,
    LoadMoreComponent,
    UserLoginComponent,
    UserLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    [MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule, MatInputModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
