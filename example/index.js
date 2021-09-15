import dotenv from 'dotenv'
dotenv.config()
import BrowserstackAppUpload from 'browserstack-app-upload-js'

let uploader = new BrowserstackAppUpload()

uploader.UploadApp({
    filePath: './files/WikipediaSample.apk',
    custom_id:"DemoApp"
}).then((res) => {
    console.log(res)
})