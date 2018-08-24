// let baseUrl = location.protocol + location.hostname
let baseUrl = '//www.668cp00.com:80'
let imgBaseUrl = ''
if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {

}
export {
  baseUrl,
  imgBaseUrl
}
