import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api'
//const baseUrl = 'https://364d37ce-d5c0-4a1a-abba-20d8ec65c07e-00-bd0cuh513n7e.picard.replit.dev/api'
const getHello = () => {
  return axios.get(baseUrl)
}
const getPhotos = (path, category, size,count) => {
  
  return axios.get(baseUrl, {
    params: {
      path: path,
      category: category,
      size:size,
      num: count
    },
    responseType:'blob'
  })

}
const uploadPhoto=(img)=>{
  return axios.post(baseUrl,img, {
    headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
}
export default {
    getHello:getHello,
    getPhotos:getPhotos,
    uploadPhoto:uploadPhoto
}