require('dotenv').config()
const cloudinary = require('cloudinary').v2


cloudinary.uploader.upload('./banana.jpg', {
  public_id: 'banana',
  type: 'upload',
  overwrite: true,
  invalidate: true,
  resource_type: 'image'
})
  .then(result => {
    console.log(result)
    open(result.secure_url)
  })
  .catch(error => {
    console.log(error)
  })