# SimpleFlags SDK

[![npm version](https://img.shields.io/npm/v/simpleflags)](https://www.npmjs.com/package/simpleflags)
[![license](https://img.shields.io/npm/l/simpleflags)](https://www.npmjs.com/package/simpleflags)
[![downloads](https://img.shields.io/npm/dm/simpleflags)](https://www.npmjs.com/package/simpleflags)

## Introduction

[SimpleFlags](https://simpleflags.io) is a powerful and user-friendly library designed to help teams of all sizes manage feature flags with ease. Built on Cloudflare, it ensures lightning-fast feature lookups, enabling you to roll out and control features in your product reliably.

## Features

- **Toggle Features with a Click**: Control features without changing code or deploying a pull-request. Easily rollback when needed.
- **Gradual Roll-out Across Segments**: Define and control feature availability for user segments like beta users or client-specific groups.
- **Manage Flags Across Environments**: Manage flags across different deployment and hosting environments like staging, UAT, and production.
- **Lightning Fast Feature Lookups**: Built on Cloudflare, feature flags are loaded from the edge and into your codebase in milliseconds.
- **Browser and Server Support**: Supports both browser-based products and server-side code, making it versatile for various use cases.

## Installation

To install the SimpleFlags into your JavaScript or TypeScript project, use npm:

```sh
npm install simpleflags
```

## Usage

```
import SimpleFlags from 'simpleflags';

const isEnabled = await SimpleFlags.isEnabled({
  teamId: 'your-team-id',
  environmentKey: 'your-environment-key',
  flagKey: 'your-flag-key',
  groupingKey: 'your-grouping-key'
});

if (isEnabled) {
  // Flag is enabled, proceed with the operation
} else {
  // Flag is disabled, handle accordingly
}
```

## Contributions

We welcome contributions from the community. Please submit a pull request.

## Learn more

Learn more on [SimpleFlags.io](https://simpleflags.io)

-----
