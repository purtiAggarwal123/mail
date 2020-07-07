const express = require('express');
const nodemailer = require('nodemailer')
const app = express();

const port = process.env.PORT || 5000;

app.post('/send_mail', (req, res) => {
  res.status(200).send({
    status: "200",
    message: 'Mail Sent!'
  })
  sendMail();
})
const sendMail = () => {
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'purtiaggarwal1997@gmail.com',
      pass: 'purti@2016'
    }
  });

  var mailOptions = {
    from: 'purtiaggarwal1997@gmail.com',
    to: 'purti@aeologic.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

app.listen(port , () => {
    console.log(`server up to ${port}`)
}) 