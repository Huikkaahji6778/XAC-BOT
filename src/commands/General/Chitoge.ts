/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "yotsuba",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/4TLYvKWI2mgAAAPo/nakano-yotsuba-smile.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `β‘ *ππ°π²-π±πΎπ* β‘\n\nπ *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\nπ *OFFICIAL BOT URL: https://github.com/ShineiIchijo/Chitoge* \n\n π *Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n\n πΎ *BOT URL:https://github.com/Whatup364/Yotsuba-Bot* \n`,
			}
		);
	};
}
