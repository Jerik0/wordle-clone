import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  public getNewWord = (wordLength: number) => {
    return this.httpClient.get(`https://random-word-api.herokuapp.com/word?length=${wordLength}`);
  }
}
