import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'resend-api-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send', async (req: any, res: any) => {
            res.setHeader('Content-Type', 'application/json');

            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const chunks: Buffer[] = [];
            req.on('data', (chunk: Buffer) => chunks.push(chunk));
            req.on('end', async () => {
              try {
                const body = JSON.parse(Buffer.concat(chunks).toString());
                const { name, email, message } = body;

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Missing required fields' }));
                  return;
                }

                const { Resend } = await import('resend');
                const resend = new Resend(env.RESEND_API_KEY);

                // KEY FIX:
                //  from: onboarding@resend.dev  (Resend's test sender - free tier allowed)
                //  to:   YOUR email only        (free tier restriction)
                //  reply_to: visitor's email    (so you can reply directly to them)
                const result = await resend.emails.send({
                  from: 'onboarding@resend.dev',
                  to: ['dahamsachintha66@gmail.com'],
                  replyTo: email,
                  subject: `[Portfolio] ${name} says: ${message.slice(0, 50)}...`,
                  html: `
                    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
                      <div style="background:linear-gradient(135deg,#4338ca,#0d9488);padding:32px;color:white;">
                        <h1 style="margin:0;font-size:22px;font-weight:800;">ðŸ“¬ New Portfolio Message</h1>
                        <p style="margin:6px 0 0;opacity:0.8;font-size:13px;">via sachinthadaham.dev contact form</p>
                      </div>
                      <div style="padding:32px;background:#fff;">
                        <table style="width:100%;border-collapse:collapse;">
                          <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px;">From</div>
                            <div style="font-size:16px;font-weight:600;color:#0f172a;">${name}</div>
                          </td></tr>
                          <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px;">Their Email (reply-to)</div>
                            <a href="mailto:${email}" style="font-size:16px;font-weight:600;color:#4338ca;text-decoration:none;">${email}</a>
                          </td></tr>
                          <tr><td style="padding:16px 0;">
                            <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">Message</div>
                            <div style="font-size:15px;color:#334155;line-height:1.75;white-space:pre-wrap;">${message}</div>
                          </td></tr>
                        </table>
                        <a href="mailto:${email}?subject=Re: Your enquiry via portfolio" style="display:inline-block;margin-top:24px;padding:12px 28px;background:#4338ca;color:white;font-weight:700;border-radius:10px;text-decoration:none;font-size:14px;">
                          Reply to ${name} â†’
                        </a>
                      </div>
                      <div style="padding:14px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
                        Sachintha Daham Portfolio Â· Powered by Resend
                      </div>
                    </div>
                  `,
                });

                if (result.error) {
                  console.error('[Resend Error]', result.error);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: result.error.message }));
                  return;
                }

                console.log('[Resend] Email sent! id:', result.data?.id);
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));

              } catch (err: any) {
                console.error('[API /send crash]', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
  };
});