# EmailJS Setup Instructions for Contact Form

## Overview
The contact form is now configured to send emails to `nikolai.l.beliaev@gmail.com` using EmailJS service. Follow these steps to complete the setup.

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (service_8a7mdac)

## 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set the template settings:
   - **To Email**: nikolai.l.beliaev@gmail.com
   - **Subject**: New Contact Form Message: {{subject}}
   - **Reply To**: {{from_email}}

4. Use this template content:

```
Hello {{to_name}},

You have received a new message through your portfolio contact form:

From: {{from_name}} ({{from_email}})
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent through the portfolio contact form.
You can reply directly to this email to respond to {{from_name}}.
```

5. Required template variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email address
   - `company` - Sender's company (optional)
   - `subject` - Message subject
   - `message` - Message content
   - `to_name` - Recipient name (Nikolai Beliaev)
   - `to_email` - Recipient email (nikolai.l.beliaev@gmail.com)

5. Note down the **Template ID** (template_f22aqls)

## 4. Get Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Find your **Public Key** (pODX2P6-vnARAp-Gq)

## 5. Environment Variables Setup
Create a `.env` file in the project root with these variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Contact Form
1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check the recipient email for the message

## 7. Production Deployment
- Ensure environment variables are set in your hosting platform
- For Vercel: Add variables in Project Settings → Environment Variables
- For Netlify: Add variables in Site Settings → Environment Variables

## Features Implemented
- ✅ Form validation with error messages
- ✅ Loading states during submission
- ✅ Success feedback with confirmation message
- ✅ Error handling with user-friendly error messages
- ✅ Email sent to nikolai.l.beliaev@gmail.com
- ✅ Auto-reply functionality
- ✅ All form fields captured (name, email, company, subject, message)

## Troubleshooting
- If emails aren't sending, check browser console for errors
- Verify all environment variables are correctly set
- Ensure EmailJS service and template are properly configured
- Check EmailJS dashboard for usage limits and quota

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

For higher volume, consider upgrading to a paid plan.
