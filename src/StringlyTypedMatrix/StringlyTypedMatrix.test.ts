// Copyright 2024 Gnuxie <Gnuxie@protonmail.com>
//
// SPDX-License-Identifier: Apache-2.0
import {
  StringRoomAlias,
  StringUserID,
  isStringRoomAlias,
  isStringRoomID,
  isStringUserID,
  roomAliasLocalpart,
  userServerName,
  userLocalpart,
} from "./";

test("isStringUserID", function () {
  expect(isStringUserID("@foo:localhost:9999")).toBe(true);
  expect(isStringUserID("@foo@mastodon.social")).toBe(false);
});

test("StringUserID serverName", function () {
  expect(userServerName("@foo:localhost:9999" as StringUserID)).toBe(
    "localhost:9999"
  );
});

test("StringUserID localpart", function () {
  expect(userLocalpart("@foo:localhost:9999" as StringUserID)).toBe("foo");
});

test("StringRoomID", function () {
  expect(isStringRoomID("!foo:localhost:9999")).toBe(true);
  expect(isStringRoomID("@foo:localhost:9999")).toBe(false);
});

test("StringRoomAlias", function () {
  expect(isStringRoomAlias("#foo:example.com")).toBe(true);
  expect(isStringRoomAlias("!foo:example.com")).toBe(false);
});

test("StringRoomAlias roomAliasLocalpart", function () {
  expect(roomAliasLocalpart("#foo:example.com" as StringRoomAlias)).toBe("foo");
});
