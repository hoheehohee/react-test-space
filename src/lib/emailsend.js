const nodemailer = require('nodemailer');
const mailForm = require('./signup_invite.html')

exports.emailsend = () => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    service: 'gmail',
    auth: {
      user: 'yongho@vendys.co.kr',
      pass: 'vendyshohee0816'
    }
  });

  let mailOptions = {
    from: '"Fred Foo 👻" <www.hohee@gmail.com>', // sender address
    to: 'bar@example.com, yongho@vendys.co.kr', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
}