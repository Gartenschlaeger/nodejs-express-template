# NodeJS Express Example

This repository contains an example app for NodeJS Express with Typescript support.

https://pnpm.io/ is used as the package manager, because of the good performance and less disk IO.

# Install

Installs dependencies from package.json file.

```sh
pnpm install
```

# Start

Starts the app. Typescript code is transpiled in memory only.
Use build instead to create a release package.

```sh
pnpm start
```

# Watch mode

Starts the app in watch mode to detect file changes.
If a file change is detected, the app will automatically restart.

```sh
pnpm start
```

# Build

Creates a release package in dist folder.

```sh
pnpm run build
```

# Update packages

Shows a list of available updates.

```sh
pnpm outdated
```

Updates dependencies to the latest version.

```sh
pnpm up --latest
```
