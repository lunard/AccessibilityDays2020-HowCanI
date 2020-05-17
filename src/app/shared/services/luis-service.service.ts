import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuisServiceService {

  constructor(private http: HttpClient) { }

  public GetLuisPrediction(sentence: string): Observable<any>{
      return this.http.post("http://localhost:5000/api/LanguageUnderstandig/understand", {text: sentence})
  }
}
