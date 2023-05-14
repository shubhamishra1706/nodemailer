// Generate SMTP service account from ethereal.email


// nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.error('Failed to create a testing account. ' + err.message);
//         return process.exit(1);
//     }

  const nodemailer = require('nodemailer');

  const sendmail = async(req,res)=>{
    let testaccount =  await nodemailer.createTestAccount()
  }

    // Create a SMTP transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'gretchen.wilderman@ethereal.email',
            pass: 'csBPFHcEMRkvf2Nkjx'
        }
    });

    // Message object
    let message = {
        from: 'shubham <shubham@gmail.com>',
        to: 'mishra@gmail.com>',
        subject: 'test purpose mail ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });



module.exports = sendmail