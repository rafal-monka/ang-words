import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  CONST_URL_API: "/api/words",
  CONST_PAGE_SIZE: 5,
  httpOptions: {
    headers: new HttpHeaders({
      "Response-Type": 'json',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    })
  }
};
