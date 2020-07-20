# PlayFinder Angular v9 Test Application


Features:

This app currently has a search component, using child input components. A list component featuring pagination. Linked via a service and utilises Reactive Forms API. I have added validation. Each component is reusable.

It builds the URL and parameters, connects to: https://api-v2.pfstaging.xyz/ (i couldnt get the other to work) and adds the data into state via NGRX.

The params are added to the URL and will work if you refresh the screen, this way you can deep link you search results.

I use pipes to manipulate data shown, for instance: Duration and dates.

I have added NGRX dev tools too so if you have the chrome plugin, you'll be able to observe state.


WORKS ON CHROME, no other browsers have been tested.


## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

By Andy Williamson
