// app/api/bot/route.ts
import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_API_KEY!;
const bot_id = Number(process.env.BOT_CHAT_ID);
const bot = new TelegramBot(token, { polling: false });

export async function POST(req: NextRequest) {
    try {
        // bot.getUpdates().then(updates => console.log(updates));
        const { name, email, message } = await req.json() as {
            name: string;
            email: string;
            message: string;
        };

        if (!message) {
            return NextResponse.json({ ok: false, error: 'Message is empty' }, { status: 400 });
        }

        const text = `Новое сообщение с формы контакта:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

        const resp = await bot.sendMessage(bot_id, text);
        console.log(resp)

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Telegram send error:', err);
        return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
    }
}
