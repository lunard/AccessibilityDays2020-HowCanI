import { Injectable } from '@angular/core';
import { ChromeSpeechRecognition, RecognizerGenerator } from "typescript-chrome-speech-api";

@Injectable({
  providedIn: 'root'
})
export class SpeechServiceService {

  private chromeSpeechRecognition: ChromeSpeechRecognition;

  constructor() {
    this.chromeSpeechRecognition = new ChromeSpeechRecognition();
  }

  public async startRecognizer(partialResultCallback: any) {
    for await (const textPart of RecognizerGenerator(this.chromeSpeechRecognition.TSpeechRecognitionEngine)) {
      partialResultCallback(textPart);
    };
    partialResultCallback(null);
  }
}
