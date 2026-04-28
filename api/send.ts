import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'liyanagesanju36@gmail.com',
      subject: `Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #4338ca, #0d9488); padding: 32px; color: white;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800;">New Portfolio Message 🚀</h1>
            <p style="margin: 8px 0 0; opacity: 0.85; font-size: 14px;">Received via sanjukaliyanage.dev</p>
          </div>
          <div style="padding: 32px; background: white;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">From</span><br/>
                  <span style="font-size: 16px; font-weight: 600; color: #0f172a;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                  <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">Reply To</span><br/>
                  <a href="mailto:${email}" style="font-size: 16px; font-weight: 600; color: #4338ca; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0;">
                  <span style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em;">Message</span><br/>
                  <p style="font-size: 15px; color: #334155; line-height: 1.7; margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
            <a href="mailto:${email}" style="display: inline-block; margin-top: 24px; padding: 12px 28px; background: #4338ca; color: white; font-weight: 700; border-radius: 10px; text-decoration: none; font-size: 14px;">
              Reply to ${name} →
            </a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}