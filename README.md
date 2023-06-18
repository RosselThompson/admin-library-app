## Description

This is a [React-Admin](https://marmelab.com/react-admin) project bootstrapped with [`create-react-admin`](https://github.com/marmelab/react-admin/tree/master/packages/create-react-admin) using `yarn` as package manager.

This web app is a powerful and user-friendly library administration application designed to streamline and optimize the management of libraries of all sizes. With its comprehensive features and intuitive interface, admin-library-app empowers librarians and administrators to efficiently handle various tasks, enhance patron experiences, and ensure smooth library operations.

## Getting Started For Developers

#### 📥 First off, install node dependencies.

```bash
yarn install
```

#### ⛔️ Review env variables.

Copy env variables from `.env.example` into `.env`.

### 🔌 And then, start the dev local server and UI.

```bash
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

### 🗂️ You can run separate sides (server, ui) running the next scripts

For Server
```bash
yarn run dev:server
```

For UI
```bash
yarn run dev:ui
```

## 📁 Project dev features

#### API

This application uses json-server to expose an API using a JSON file as database [http://localhost:3000](http://localhost:3000).

#### Manage Books

This app allows you manage a CRUD (Create, Read, Update, Delete) of books in [http://localhost:5173/books](http://localhost:5173/books).

#### Manage Authors

This app allows you manage a CRUD (Create, Read, Update, Delete) of authors [http://localhost:5173/authors](http://localhost:5173/authors).
