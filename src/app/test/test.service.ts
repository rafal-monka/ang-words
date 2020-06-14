import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Injectable()
export class TestService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getWord(url: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    const headerDict = {

    }
    const httpOptions = {
      headers: new HttpHeaders({
        "Response-Type": 'json',
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      })
    };

    return this.http.get(url, httpOptions)
  }


}
