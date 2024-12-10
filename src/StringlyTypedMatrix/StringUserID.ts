// SPDX-FileCopyrightText: 2023 - 2024 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileAttributionText: <text>
// This modified file incorporates work from neightrix-basic-types
// https://github.com/the-draupnir-project/neightrix-basic-types
// </text>

const StringUserIDRegex = /^@(?<localpart>[^\s:]*):(?<serverName>\S*)$/;

export type StringUserIDBrand = {
  readonly StringUserID: unique symbol;
};
export type StringUserID = string & StringUserIDBrand;

export function isStringUserID(string: string): string is StringUserID {
  return StringUserIDRegex.test(string);
}

export function StringUserID<T>(
  string: unknown
): T extends StringUserID ? StringUserID : never {
  if (typeof string === "string" && isStringUserID(string)) {
    return string as T extends StringUserID ? StringUserID : never;
  }
  throw new TypeError("Not a valid StringUserID");
}

export function userServerName(userID: StringUserID): string {
  const match = StringUserIDRegex.exec(userID)?.groups?.serverName;
  if (match === undefined) {
    throw new TypeError("Somehow a StringUserID was created that is invalid.");
  }
  return match;
}

export function userLocalpart(userID: StringUserID): string {
  const match = StringUserIDRegex.exec(userID)?.groups?.localpart;
  if (match === undefined) {
    throw new TypeError("Somehow a StringUserID was created that is invalid.");
  }
  return match;
}
