// SPDX-FileCopyrightText: 2023 - 2024 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileAttributionText: <text>
// This modified file incorporates work from neightrix-basic-types
// https://github.com/the-draupnir-project/neightrix-basic-types
// </text>

const StringRoomIDRegex = /^![^:]*:\S*/;

export type StringRoomIDBrand = {
  readonly StringRoomID: unique symbol;
};
export type StringRoomID = string & StringRoomIDBrand;

export function isStringRoomID(string: string): string is StringRoomID {
  return StringRoomIDRegex.test(string);
}
