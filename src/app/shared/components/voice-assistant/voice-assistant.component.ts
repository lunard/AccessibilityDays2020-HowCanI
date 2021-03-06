import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { SpeechServiceService } from '../../services/speech-service.service';
import { LuisServiceService } from '../../services/luis-service.service';

@Component({
  selector: 'app-voice-assistant',
  templateUrl: './voice-assistant.component.html',
  styleUrls: ['./voice-assistant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VoiceAssistantComponent implements OnInit {

  isListening: boolean = false;
  recognizedText: string = "";
  prediction: string = "";

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  @ViewChild('spinner', { static: false }) spinner: MatProgressSpinner;

  constructor(
    private speechServiceService: SpeechServiceService,
    private luisServiceService: LuisServiceService) { }


  async ngOnInit() {
    setInterval(async () => {
      await this.startRecognizer();
    }, 4000);
  }

  private async startRecognizer() {
    if (!this.isListening) {
      await this.speechServiceService.startRecognizer((txt) => {
        if (!txt) {
          this.isListening = false;
          this.color = 'primary';
          this.stopProgress();

          // launch luis
          this.luisServiceService.GetLuisPrediction(this.recognizedText).subscribe((prediction) => {
            this.prediction = prediction;
            console.log(this.recognizedText)
          });

          // setTimeout(async () => {
          //   await this.startRecognizer();
          // }, 500);
        }
        else {
          this.isListening = true;
          this.color = 'warn';
          this.startProgress();
          this.recognizedText = txt;
        }
      });
    }
  }

  private stopProgress() {
    this.mode = 'determinate';
  }

  private startProgress() {
    this.mode = 'indeterminate';
  }
}
