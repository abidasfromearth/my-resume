'use server';

export async function submitContact(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, message: 'Please fill in all fields' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: 'Please enter a valid email address' };
    }

    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        const resp = await fetch(`${baseUrl}/api/bot`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });

        if (!resp.ok) {
            const text = await resp.text();
            console.log('Telegram API error:', resp.status, text);
            return { success: false, message: 'Failed to send message' };
        }

        return { success: true, message: `Thanks ${name}! Your message has been sent.` };
    } catch (err) {
        console.error(err);
        return { success: false, message: 'Something went wrong' };
    }
}
