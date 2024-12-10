// SPDX-FileCopyrightText: 2023 - 2024 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileAttributionText: <text>
// This modified file incorporates work from neightrix-basic-types
// https://github.com/the-draupnir-project/neightrix-basic-types
// </text>

const StringRoomAliasRegex =
  /^#(?<roomAliasLocalpart>[^\s:]*):(?<roomAliasServerName>\S*)$/;

export type StringRoomAliasBrand = {
  readonly StringRoomAlias: unique symbol;
};
export type StringRoomAlias = string & StringRoomAliasBrand;
export function StringRoomAlias<T>(
  value: unknown
): T extends StringRoomAlias ? StringRoomAlias : never {
  if (typeof value === "string" && isStringRoomAlias(value)) {
    return value as T extends StringRoomAlias ? StringRoomAlias : never;
  }
  throw new TypeError("Not a valid StringRoomAlias");
}

export function isStringRoomAlias(string: string): string is StringRoomAlias {
  return StringRoomAliasRegex.test(string);
}

export function roomAliasLocalpart(alias: StringRoomAlias): string {
  const match = StringRoomAliasRegex.exec(alias)?.groups?.roomAliasLocalpart;
  if (match === undefined) {
    throw new TypeError(
      "Somehow a StringRoomAlias was created that is invalid."
    );
  }
  return match;
}

export function roomAliasServerName(alias: StringRoomAlias): string {
  const match = StringRoomAliasRegex.exec(alias)?.groups?.roomAliasServerName;
  if (match === undefined) {
    throw new TypeError(
      "Somehow a StringRoomAlias was created that is invalid."
    );
  }
  return match;
}
