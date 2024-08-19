import mailer from "@/helper/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, message, email } = reqBody;
    console.log(name, message);
    await mailer.sendMail({
      from: "fookreywebs@gmail.com",
      //   to: "lifeenjoy985@gmail.com",
      to: "vinayakporwal5522@gmail.com",
      subject: "Someone Query to you " + name,
      html: `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h2 {
        color: #333;
      }
      p {
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
        <p>Hey Vinayak,</p>
        <p>Your got ad new query. We appreciate you to look forward to assist them perosnally.</p> \n
        <h3>Details of Query-</h3>
        <p>Name: ${name},</p>
        <p>Email: ${email},</p>
        <p>Message: ${message},</p>
         
        <p>Best regards,<br>Vinayak</p>
    </div>
  </body>
  </html>`,
    });

    return NextResponse.json(
      { success: true, data: "Form submited success" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, error: e }, { status: 500 });
  }
}
