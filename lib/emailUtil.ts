const emailid = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PW;
console.log(emailid, pass);

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
//-----------------------------------------------------------------------------
export async function sendMail(
  subject: string,
  toEmail: string,
  message: string,
  fullName: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailid,
      pass: pass,
    },
  });
  console.log(transporter);

  const htmlTemplate = `
  <html>
  <head>
      <style>
          /* CSS styles for formatting */
          .container {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
          }
          .logo {
              max-width: 100px; /* Adjust as needed */
          }
          .card {
              border: 1px solid #ccc;
              border-radius: 5px;
              padding: 10px;
              margin-bottom: 10px;
              flex: 1; /* Distribute remaining space evenly */
              margin-left: 20px; /* Add space between logo and content */
          }
          .label {
             
              font-weight: bold;
          }
          .logo{
              padding: 2px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          
          <div class="card">
              <div class="logo">
                  <!-- <img class="logo" src="path_to_your_logo" alt="Company Logo"> -->
                  <h2>TOTC</h2>
              </div>
              <div class="card">
                  <p class="label">Name:</p>
                  <p>${fullName}</p>
              </div>
              <div class="card">
                  <p class="label">Email:</p>
                  <p>${toEmail}</p>
              </div>
              <div class="card">
                  <p class="label">Message:</p>
                  <p>${message}</p>
              </div>
          </div>
      </div>
  </body>
  </html>  
 `;
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "hardikbhammar8040@gmail.com",
    // subject: subject,
    replyTo: toEmail,
    subject: `Website activity from ${toEmail} ${subject}`,
    html: htmlTemplate,
    // html: `
    // <p>Name: ${fullName} </p>
    // <p>Email: ${toEmail} </p>
    // <p>Message: ${message} </p>
    // `,
    // text: message,
  };
  console.log(mailOptions);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent successfully");
      return NextResponse.json({
        success: true,
        message: mailOptions,
      });
    }
  });
}
