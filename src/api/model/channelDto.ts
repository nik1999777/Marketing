/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { ChannelUserDto } from "./channelUserDto";
import type { ChannelCategoryDto } from "./channelCategoryDto";
import type { ChannelDtoTechStack } from "./channelDtoTechStack";
import type { ChannelDtoSolution } from "./channelDtoSolution";
import type { ModChanelInfoDto } from "./modChanelInfoDto";
import type { UserShortDto } from "./userShortDto";

export interface ChannelDto {
  id?: string;
  channelId?: number;
  link?: string;
  channelUser?: ChannelUserDto;
  category?: ChannelCategoryDto;
  techStack?: ChannelDtoTechStack;
  participantsCount?: number;
  ic?: number;
  irr?: number;
  connected?: number;
  price?: number;
  personPrice?: number;
  comment?: string;
  utmUrl?: string;
  shortUrl?: string;
  startedDate?: string;
  registration?: number;
  registrationPrice?: number;
  solution?: ChannelDtoSolution;
  paymentMethod?: string;
  redLabel?: boolean;
  blackLabel?: boolean;
  greenLabel?: boolean;
  estimated?: number;
  modChanelInfo?: ModChanelInfoDto;
  creator?: UserShortDto;
  creationDate?: string;
}