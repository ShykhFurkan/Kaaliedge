import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required fields." },
                { status: 400 }
            );
        }

        const smtpUser = process.env.SMTP_USER || "darmustansir13@gmail.com";
        const smtpPass = process.env.SMTP_PASS;
        const toEmail = process.env.TO_EMAIL || "darmustansir13@gmail.com";

        if (!smtpPass || smtpPass === "your_gmail_app_password_here") {
            console.warn(
                "Nodemailer warning: SMTP_PASS is missing or using default placeholder."
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE !== "false",
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const mailOptions = {
            from: `"${name}" <${smtpUser}>`,
            to: toEmail,
            replyTo: email,
            subject: `New Counseling Request / Inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message || "No message content provided."}
            `.trim(),
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #1e3a8a;">New Contact Inquiry / Consultation Request</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
                            <td style="padding: 8px;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold;">Email:</td>
                            <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold;">Phone:</td>
                            <td style="padding: 8px;">${phone || "Not provided"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
                            <td style="padding: 8px;">${message ? message.replace(/\n/g, "<br>") : "No message provided."}</td>
                        </tr>
                    </table>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json(
            {
                error:
                    error.message ||
                    "Failed to send email. Please check SMTP configuration.",
            },
            { status: 500 }
        );
    }
}
