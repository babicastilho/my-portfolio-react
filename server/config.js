const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    dkim: {
        domainName: "barbaracastilho.com",
        keySelector: "titan1",
        privateKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnH8Oik6+QIBrI3AQONB0EcBRPv1sdznFZ3CQNIvqUG6v6vdcXXfPzcrT/I8olgS55Ifz82OIEP5609QedpAjE7FNkYKJKKEBxiCMifYKC34a6eZ66e8fEFIy6KFuwEmV1yJ/mHsEGRP/Jj9DOPK+firOaWgzK+TEVhLPo7FjY0QIDAQAB"
      },
    auth: {
        user: process.env.email, 
        pass: process.env.password
    },
    tls: { rejectUnauthorized: false }, // add this line to your code
    
  }); 
  console.log('Domain: ' + process.env.domain);
  console.log('Selector: ' + process.env.selector);
  console.log(process.env.key);
  console.log('---------------------');
  console.log('User: ' + process.env.email);
  console.log('Pass: '+ process.env.password);

transporter.verify(function (error, success) {
    if (success) {
        console.log('Server is ready to take our messages');
    } else {
        if (error) console.log(error);
        else console.log('unknown error');
    }
});

module.exports = transporter;