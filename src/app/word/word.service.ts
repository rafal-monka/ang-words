import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class WordService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getWord(id: number) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(environment.CONST_URL_API+"/find/"+id, environment.httpOptions)
  }

  deleteWord(id: number) {
    console.log("deleteWord", id);
    return this.http.delete(environment.CONST_URL_API+"/delete/"+id, environment.httpOptions)
  }

  tagWord(id: number, tag: string) {
    console.log("tagWord", id);
    return this.http.put(
      environment.CONST_URL_API+"/"+id,
      {
        tags: tag
      },
      environment.httpOptions
    )
  }
}
