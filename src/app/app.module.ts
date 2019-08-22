import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { memeListComponent } from './memes/meme-list.component';
import { MemeService } from './memes/meme-list.service';

@NgModule({
  declarations: [
    AppComponent,
    memeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
