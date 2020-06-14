import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { environment } from '../../environments/environment';

@Injectable()
export class PageService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPage(page: number) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    const CONST_URL_PAGE = "page/";

    return this.http.get(environment.CONST_URL_API+"/"+CONST_URL_PAGE+"?pageSize="+environment.CONST_PAGE_SIZE+"&currentPage="+page, environment.httpOptions)
  }


}
