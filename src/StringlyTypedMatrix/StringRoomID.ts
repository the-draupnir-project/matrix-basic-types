// SPDX-FileCopyrightText: 2023 - 2025 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileAttributionText: <text>
// This modified file incorporates work from matrix-basic-types
// https://github.com/the-draupnir-project/matrix-basic-types
// </text>

import { StringServerName } from "./StringServerName";

const StringRoomIDRegex = /^!([^:]*:(?<serverName>\S*)|[a-zA-Z0-9-_]{43})/;

export type StringRoomIDBrand = {
  readonly StringRoomID: unique symbol;
};
export type StringRoomID = string & StringRoomIDBrand;

export function isStringRoomID(string: string): string is StringRoomID {
  return StringRoomIDRegex.test(string);
}

export function StringRoomID<T>(
  value: unknown
): T extends StringRoomID ? StringRoomID : never {
  if (typeof value === "string" && isStringRoomID(value)) {
    return value as T extends StringRoomID ? StringRoomID : never;
  }
  throw new TypeError("Not a valid StringRoomID");
}

export function roomIDServerName(
  roomID: StringRoomID
): StringServerName | undefined {
  const match = StringRoomIDRegex.exec(roomID)?.groups?.serverName;
  if (match === undefined) {
    return undefined; // this room does not have a server name
  }
  return match as StringServerName;
}
