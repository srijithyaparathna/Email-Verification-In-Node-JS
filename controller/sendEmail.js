const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "srijithtestbus@gmail.com",
      pass: "uzaq ikxt ohiw yqpi",
    },
  });


  const mailOptions = {
    from: "srijithtestbus@gmail.com",
    to: "isurue117@gmail.com", // password SrijithTest1@
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
  