import { log, request } from 'directus:api';

export default {
	id: 'telegram-send-message-operation',
	handler: async ({ chat_id, message_thread_id, telegram_bot_token, text, disable_notification }) => {
		try {
			const response = await request('https://api.telegram.org/bot'+ telegram_bot_token +'/sendMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: chat_id,
					message_thread_id: message_thread_id,
					text: text,
					disable_notification: disable_notification
				}),
			});
			if (response.status !== 200)
				throw new Error('An error occurred when accessing Telegram');
			return response.data;
		}
		catch (error) {
			log(JSON.stringify(error));
			throw new Error(error.message);
		}
	},
}