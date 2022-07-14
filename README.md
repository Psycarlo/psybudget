<h1 align="center">
  <br>
  Add logo here
  <br>
  <br>
  Open Source Budget and Expense App made with Vue, Tailwind and PocketBase
  <br>
  <br>
</h1>

<p align="center">
  Made with :heart: by Psycarlo
</p>

## Development Requirements

- Node.js: [Current](https://nodejs.org/en/)
- Yarn: [Current](https://classic.yarnpkg.com/lang/en/docs/install)
- PocketBase: [Current](https://pocketbase.io/docs/)
- (Optional) [Visual Studio Code](https://code.visualstudio.com/)

## Recommended VSC Setup

### Extensions

- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
- [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

### Config

- Set Format on Save

Go to Settings and set:

```
Format On Save: On
Default Formatter: Prettier
```

## Getting Started

### Setup

1. Clone this repository

2. Navigate to the folder using the terminal

```shell
cd psybudget
```

3. Install dependencies

```shell
yarn
```

4. Add .env files - Check .env.example

```
.env.*
```

5. Create pocketbase folder in the root of the directory

```
pocketbase
```

6. Extract pocketbase [zip](https://pocketbase.io/docs/) into that folder

## Run

Open two terminals. In the first run pocketbase

```shell
yarn db
```

On the second terminal, run the app in development mode

```shell
yarn dev
```

### Lint & Format

Print ESLint errors and warnings

```shell
yarn lint
```

Fix ESLint errors and warnings

```shell
yarn lint:fix
```

Print Prettier errors and warnings

```shell
yarn format
```

Fix Prettier errors and warnings

```shell
yarn format:fix
```

Note: You may need to fix some by hand

## Tech Stack

- [Vite](https://vitejs.dev/)
- [Vue](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)
- [PocketBase](https://pocketbase.io/)
