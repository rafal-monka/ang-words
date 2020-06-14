// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  CONST_URL_API: "http://localhost:8085/api/words",
  CONST_PAGE_SIZE: 5,
  httpOptions: {
    headers: new HttpHeaders({
      "Response-Type": 'json',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    })
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
