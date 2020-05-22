import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular HTTP Import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { HomePageComponent } from './pages/public/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { CvListComponent } from './pages/admin/cv_list/cv-list.component';
import { CvEditorComponent } from './pages/admin/cv-editor/cv-editor.component';

// Markdown viewer 
import { MarkdownModule } from 'ngx-markdown';

// Markdown editor
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { CvDisplayComponent } from './pages/public/cv-display/cv-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DashboardComponent,
    CvListComponent,
    CvEditorComponent,
    CvDisplayComponent,
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LMarkdownEditorModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
