export default {
	id: 'telegram-send-message-operation',
	name: 'Telegram Send Message',
	icon: 'telegram',
	description: 'Sends a message to a chat Telegram',
	overview: ({ chat_id, disable_notification, message_thread_id }) => [
		{
			label: 'Chat id',
			text: chat_id,
		},
		{
			label: 'Thread id',
			text: message_thread_id ?? "Not specified",
		},
		{
			label: 'Silently',
			text: disable_notification,
		},
	],
	options: [
		{
			field: 'telegram_bot_token',
			name: 'Telegram bot token',
			type: 'string',
			meta: {
				width: 'full',
				required: true,
				interface: 'input',
				note: "You can get it here: https://t.me/BotFather"

			},
		},
		{
			field: 'chat_id',
			name: 'Chat id',
			type: 'string',
			meta: {
				width: 'full',
				required: true,
				interface: 'input',
				note: "You can get it here: https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getUpdates"
			},
		},
		{
			field: 'message_thread_id',
			name: 'Thread id',
			type: 'string',
			meta: {
				width: 'full',
				required: false,
				interface: 'input',
				note: "You can get it here: https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getUpdates"
			},
		},
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				required: true,
				interface: 'input',
				note: "Your message text"
			},
		},
		{
			field: 'disable_notification',
			name: 'Disable notification',
			type: 'boolean',
			meta: {
				width: 'full',
				required: true,
				note: "Sends the message silently. Users will receive a notification with no sound."
			},
			schema: {
				default_value: false,
			}
		},
	],
};
