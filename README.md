# Strapi Deeplink

A simplified aproach to deeplinks
 
## Getting started

 1. Go to your strapi project
 2. Open the project `/extensions` folder
 3. Clone the folder `/deeplink` inside the folder
4. Open the file `/extensions/deeplink/config/custom.json` and insert your app deeplink and stores link.
> **Note**: If you want to different api credentials for each environment, you can use environment variables to do so.

You are ready to go!

## Usage 

 - GET - `/mobile/deeplink` 
to redirect to app deeplink with redirect params, so this call:

```es6
    `${ STRAPI_ENDPOINT }/mobile/deeplink?redirect=app/screen/path/with/params`
```

will redirect to this deeplink:

```es6
    `${ APP_DEEPLINK }app/screen/path/with/params`
```

 - GET - `/mobile/store`
to redirect to app store, will redirect user to correct store


**supported stores**
- Apple App Store
- Play Store


Happy Coding!
