import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ContentSectionComponent } from './content-section/content-section.component';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './utility-menu/utility-user/user-login/user-login.component';
import { UserLogoutComponent } from './utility-menu/utility-user/user-logout/user-logout.component';
import { EditNewsComponent } from './content-section/edit-news/edit-news.component';
import { ReadMoreComponent } from './content-section/read-more/read-more.component';
import { SearchTextPipe } from './search-text.pipe';

const router = [
  {path: '', component: ContentSectionComponent},
  {path: 'edit/:id', component: EditNewsComponent},
  {path: 'news/:id', component: ReadMoreComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UtilityMenuComponent,
    UtilityLogoComponent,
    UtilityUserComponent,
    SourceSectionComponent,
    FiltersMenuComponent,
    ContentSectionComponent,
    FooterComponent,
    UserLoginComponent,
    UserLogoutComponent,
    EditNewsComponent,
    ReadMoreComponent,
    SearchTextPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
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
