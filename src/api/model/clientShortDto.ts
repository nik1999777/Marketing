/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { ClientMessengerDto } from "./clientMessengerDto";

export interface ClientShortDto {
  id?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phones?: string[];
  messengers?: ClientMessengerDto[];
  email?: string;
}
