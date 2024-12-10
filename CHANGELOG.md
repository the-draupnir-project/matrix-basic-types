<!--
SPDX-FileCopyrightText: 2024 Gnuxie <Gnuxie@protonmail.com>

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-12-10

### Added

- `StringRoomID`, `StringRoomAlias`, `StringUserID`, and
  `StringEventID` all now have functions to check if their argument is
  the associated type from `unknown`. Helpful for surrounding string
  literals in tests without using `as` to cast.

## [1.0.0] - 2024-12-10

### Changed

- The branding technique for string types such as `StringUserID` has
  been changed to enable compatibility with libraries like zod, which
  seem to want to structurally replicate types rather than refer to
  them by name.

## [0.2.0] - 2024-09-11

### Changed

- Updated to `@gnuxie/typescript-result@1.0.0`.

## [0.1.1] - 2024-07-30

### Added

- GitHub workflow file for actually releasing the package.

## [0.1.0] - 2024-07-30

- Initial release.
