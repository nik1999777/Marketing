/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { ChannelInfoDtoStatus } from "./channelInfoDtoStatus";
import type { ChannelResponse } from "./channelResponse";

export interface ChannelInfoDto {
  error?: string;
  status?: ChannelInfoDtoStatus;
  response?: ChannelResponse;
}