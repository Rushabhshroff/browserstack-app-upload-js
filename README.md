# browserstack-app-upload-js

## Installation
```

npm install https://github.com/Rushabhshroff/browserstack-app-upload-js.git

or

yarn add https://github.com/Rushabhshroff/browserstack-app-upload-js.git
 
```

## Environment Variables

### Set following in your system environment variables (Best Practice)
```
BROWSERSTACK_USERNAME = <your username>
BROWSERSTACK_ACCESS_KEY = <your access key>
```

## Usage

```javascript
import BrowserstackAppUpload from 'browserstack-app-upload-js'

let uploader = new BrowserstackAppUpload(opts) // opts accepts browserstack username & accesskey but not required if set as ENV variables

let Response = await uploader.UploadApp({
    filePath: <path-to-file>,
    custom_id: <custom-id>, //Optional
}) // {app_url:bs://.....}
```
