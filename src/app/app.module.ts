import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechServiceService } from './shared/services/speech-service.service';
import { VoiceAssistantComponent } from './shared/components/voice-assistant/voice-assistant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    VoiceAssistantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
