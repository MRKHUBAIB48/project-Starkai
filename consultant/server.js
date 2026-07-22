import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: '✅ Server is running',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('📨 Received:', req.body);

    const { name, email, company, interest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    const yourEmail = process.env.YOUR_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    const emailToYou = await resend.emails.send({
      from: fromEmail,
      to: yourEmail,
      reply_to: email,
      subject: `🔔 New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #0891b2;">🔔 New Consultation Request</h2>
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Interest:</strong> ${interest || 'Not specified'}</p>
          </div>
          <div style="background: #fefce8; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Received: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    console.log('✅ Email sent to you:', emailToYou.id);

    const emailToCustomer = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: '✅ Thank You for Your Consultation Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #0891b2;">Thank You for Your Interest!</h2>
          <p>Dear ${name},</p>
          <p>We have received your consultation request and will get back to you within <strong>24 hours</strong>.</p>
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Request:</strong> ${message}</p>
          </div>
          <p>We look forward to helping you!</p>
          <p style="margin-top: 20px; color: #666;">
            Best regards,<br>
            <strong>Starkai Team</strong>
          </p>
        </div>
      `
    });

    console.log('✅ Confirmation sent to customer:', emailToCustomer.id);

    res.json({
      success: true,
      message: 'Consultation request sent successfully!'
    });
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email'
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 From: ${process.env.FROM_EMAIL || 'onboarding@resend.dev'}`);
  console.log(`📧 To: ${process.env.YOUR_EMAIL}`);
  console.log(`🔗 Health: http://localhost:${PORT}/api/health\n`);
});