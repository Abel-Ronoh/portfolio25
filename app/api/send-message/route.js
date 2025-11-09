// pages/api/send-message.js or app/api/send-message/route.js
import { adminDb } from '@/lib/firebase-admin';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields: name, email, message' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email format' 
      });
    }

    // Save to Firestore using Admin SDK
    const docRef = await adminDb.collection('messages').add({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || 'No subject',
      message: message.trim(),
      timestamp: new Date(),
      read: false,
      status: 'new'
    });

    console.log('✅ Message saved to Firestore:', docRef.id);

    return res.status(200).json({ 
      success: true, 
      id: docRef.id,
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('❌ Error saving message:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}