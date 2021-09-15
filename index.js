import fetch from 'node-fetch'
import FormData from 'form-data'
import fs from 'fs'
import assert from 'assert'
/**
 * Browserstack Creds
 * @param {{username?:string,accesskey?:string}} opts 
 */
function BrowserstackAppUpload(opts) {

    this.username = opts && opts.username ? opts.username : process.env['BROWSERSTACK_USERNAME']
    this.accesskey = opts && opts.accesskey ? opts.accesskey : process.env['BROWSERSTACK_ACCESS_KEY']

}

/**
 * Upload file to browserstack (.apk,.aab,.ipa)
 * For Appium Tests
 * @param {{filePath:string,custom_id?:string}} opts 
 * @returns {Promise<{app_url:string,custom_id?:string,shareable_id?:string}}
 */
BrowserstackAppUpload.prototype.UploadApp = async function (opts) {
    assert.ok(this.username != undefined, "Browserstack Username not Set")
    assert.ok(this.accesskey != undefined, "Browserstack AccessKey not Set")
    let fileStream = fs.createReadStream(opts.filePath)
    let url = "https://api-cloud.browserstack.com/app-automate/upload"
    const stats = fs.statSync(opts.filePath);
    const fileSizeInBytes = stats.size;
    let form = new FormData()
    form.append('file', fileStream, { knownLength: fileSizeInBytes });
    if (opts.custom_id) {
        form.append('custom_id', opts.custom_id)
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(this.username + ':' + this.accesskey).toString('base64')}`
        },
        credentials: 'include',
        body: form
    }).then(async (res) => {
        if (res.status == 200) {
            return await res.json()
        } else {
            let error = await res.text()
            throw new Error(error)
        }
    })
}
export default BrowserstackAppUpload

