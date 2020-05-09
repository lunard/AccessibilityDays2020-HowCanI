import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { SpeechServiceService } from '../../services/speech-service.service';

@Component({
  selector: 'app-voice-assistant',
  templateUrl: './voice-assistant.component.html',
  styleUrls: ['./voice-assistant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VoiceAssistantComponent implements OnInit {

  recognizedText: string = "";

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  @ViewChild('spinner', { static: false }) spinner: MatProgressSpinner;

  constructor(private speechServiceService: SpeechServiceService) { }


  async ngOnInit() {
      await this.startRecognizer();
  }

  private async startRecognizer(){
    await this.speechServiceService.startRecognizer((txt) => {
      if (!txt){
        this.color = 'primary';
        this.stopProgress();

        setTimeout(async () => {
          await this.startRecognizer();
        }, 500);
      }
      else{
        this.color = 'warn';
        this.startProgress();
        this.recognizedText = txt;
      }
    });
  }

  private stopProgress() {
    this.mode = 'determinate';
  }

  private startProgress() {
    this.mode = 'indeterminate';
  }
}
