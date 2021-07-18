const { compareSync } = require('bcryptjs')
const { google } = require('googleapis')
const nodemailer = require('nodemailer')

// const oauth config    
const oAuth2Client=  new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI)

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN})
const sendMail = async (to, sender) => {
  try {

    const accessToken = await oAuth2Client.getAccessToken()
    const transport =  nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
    
      auth: {
        type: process.env.EMAIL_TYPE,
        user: process.env.EMAIL_HOST, 
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
      }
    })
    const messageBody = `<div>

    <h2>Hi ${sender}</h2>

    <p>Zoom test email sent</p>
    <p>Many thanks for reaching out to us</p>
    <p>We are testing send email functionality to automatically reply users who contact EthNG. Our dedicated team will get back to you within 3 business days   </p>

    <p>Click this <a href='http://localhost:3000'>link</a> Nothing here yet, it's WIP 🚀🚀🚀🚀🚀🚀🚀🚀<p>

    </div>`


    const mailOptions = {
      from: process.env.EMAIL_FROM,

      to: to,

      subject: process.env.EMAIL_SUBJECT,

      text: 'Testin  Gmail API',

      html: messageBody           
    }          



    return transport.sendMail(mailOptions)



  }  catch(err) {
    return res.json(err)
  }

}



module.exports = { sendMail }