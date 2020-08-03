const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const viewPath =  path.resolve(__dirname, './views/')

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
      user: 'your mail',
      pass: 'your password'
    }
  });
  transporter.use('compile', hbs({
    viewEngine: {
      extName: '.handlebars',
      partialsDir: viewPath,
      layoutsDir: viewPath,
      defaultLayout: false,
    },
    viewPath: viewPath,
    extName: '.handlebars',
  }))

  var mailOptions = {
    from: 'sender mail',
    to: 'receiver mail',
    subject: 'Sending Email using Node.js',
    template: 'index',
    
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