// Enter a CLD_URL environment variable

require('dotenv').config()
const cloudinary = require('cloudinary').v2

/* 3 options for credentials */

// use environment variables
// repl.it provides a hidden env with a small form

// go to shell and export cld url
// export CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME

// const cldURL = "CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME";
// cloudinary.config(cldURL);

// cloudinary.config({
//  cloud_name: "xx", // add your cloud_name
//  api_key: "xx", // add your api_key
//  api_secret: "xx", // add your api_secret
//  secure: true
// });


cloudinary.uploader.upload('./banana.jpg', {
  public_id: 'banana',
  type: 'upload',
  overwrite: true,
  invalidate: true,
  resource_type: 'image'
})
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })