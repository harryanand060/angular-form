// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  validation:{
    email_or_mobile_pattern:/^([[1-9]{1,5})?([7-9][0-9]{9}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/,
    mobile_pattern:/^([[1-9]{1,5})?([7-9][0-9]{9})$/,
    email_pattern:/^([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/,
    password_min_length:8,
    password_max_length:20,
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
