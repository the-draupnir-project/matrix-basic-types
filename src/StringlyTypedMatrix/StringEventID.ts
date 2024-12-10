// SPDX-FileCopyrightText: 2023 - 2024 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
//
// SPDX-FileAttributionText: <text>
// This modified file incorporates work from neightrix-basic-types
// https://github.com/the-draupnir-project/neightrix-basic-types
// </text>

export type StringEventIDBrand = {
  readonly StringEventID: unique symbol;
};
export type StringEventID = string & StringEventIDBrand;

export function isStringEventID(string: string): string is StringEventID {
  return string.startsWith("$");
}
