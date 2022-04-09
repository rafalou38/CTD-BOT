import { GuildMember, User } from "discord.js";
import { Mission } from "../schemas/mission";
import { Rating } from "../schemas/rating";
import { getMember } from "./member";

export async function createRating(
    mission: Mission,
    rating: number,
    comment: string,
    dev: GuildMember,
    client: GuildMember,
) {
    return new Rating({
        guildID: mission.authorGuildID,
        mission: mission._id,
        dev: dev.user.id,
        client: client.user.id,
        rating,
        comment,
    });
}

export async function getRatings(dev: GuildMember) {
    return Rating.find({
        dev: dev.user.id,
        guildID: dev.guild.id,
    });
}
