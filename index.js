const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.use(express.json())


const nodemailer = require("nodemailer");

app.get('/', (req, res) => {  
    res.send('Hello World!')

})

app.post('/sendemail', (req, res) => {  
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "srivenkateswaraganamrutham@gmail.com",
    pass: "imdg pgwj eaet ehun",
  },
});

let data = req.body;

const mailOptions = {
  from: "srivenkateswaraganamrutham@gmail.com",
  to: "srivenkateswaraganamrutham@gmail.com",
  subject: "New Message",
  html: +req.body.name +"\n\n"+req.body.email+"\n\n"+req.body.message
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error occured:`, error);
  }
  console.log(`Email sent successfully:`, info.response);
  res.status(200).send('success')
})

})