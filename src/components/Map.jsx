import React from 'react'

function Map({className}) {
  return (
         <div className={className}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.69903607352784!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739303933683!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
    </div>
  )
}

export default Map