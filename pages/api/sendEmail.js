import nodemailer from "nodemailer";
require("dotenv").config();
const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export default async function handler(req, res) {

    if (req.method === "POST") {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass:pass,
            },
        });

        const mailOptions = {
            from: email,
            to: "namedsukhvir@gmail.com",
            subject: "New mail from Portfolio",
            text: `Email: ${req.body.gmail}\n\nMessage: ${req.body.message}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error("Error sending email:", error);
                return res
                    .status(500)
                    .send(`Error sending email: ${error.message}`);
            } else {
                console.log("Email sent:", info.response);
                return res.status(200).send("Email sent successfully");
            }
        });
    } else {
        res.status(405).end();
    }
}
