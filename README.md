# browserstack-app-upload-js

## Installation
```

npm install https://github.com/Rushabhshroff/browserstack-app-upload-js.git

or

yarn add https://github.com/Rushabhshroff/browserstack-app-upload-js.git
 
```
## Usage

```javascript
import BrowserstackAppUpload from 'browserstack-app-upload-js'

let uploader = new BrowserstackAppUpload()

let Response = await uploader.UploadApp({
    filePath: <path-to-file>,
    custom_id: <custom-id>, //Optional
}) // {app_url:bs://.....}
```
