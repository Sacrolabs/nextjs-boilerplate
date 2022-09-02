This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> ## Available Scripts

In the project directory, you can run:
- ### `npm install`
- ### `npm run dev`

Run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- ### `npm run test`

Launches the test runner in the interactive watch mode.

- ### `npm run build`

Builds the app for production to the `build` folder.

> ## Express Installation

While NextJS is a wonderful tool in its own right, augmenting it with Express makes for a powerful combo

- ### `npm install express`

After run the command then add the server.js files in root with dummy data

### _server.js_

```

const express = require("express");
const app = express();
const port = 3001;


app.use(express.json());
app.use((req, res, next) => {
  setTimeout(next, 2000);
});

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/usersData", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

> ## fetch data from express in frontend

- ### `npm i axios`

```
import React from "react";
import axios from "axios";
const Post = ({ usersData }) => {
  return (
    <>
      <table id="customers">
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
        {usersData &&
          usersData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td> {item.email}</td>
              </tr>
            );
          })}
      </table>
    </>
  );
};
export default Post;
export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_SERVER_API_DUMMY_DATA_ENDPOINT}` + "/usersData"
  );
  const data = response.data;
  return {
    props: {
      usersData: data,
    },
  };
}


```

> ## Run Express:

After that open **localhost://3001** in broswer;

- ### `node server.js`

> ## Cookies :

Getting, setting and removing cookies with NEXT.JS

- Basic HTTP cookie parser and serializer for HTTP servers.

- ### `npm install cookie`

### _lib/parseCookies.js_

```

import cookie from "cookie";

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

```

> ## Cors Installation

- This is a Node.js module available through the npm registry. Installation is done using the npm install command:

* ### `npm install cors`

```

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
  setTimeout(next, 2000);
});

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/usersData", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


```

> ## Storybook Installation

## Add Storybook:

- Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

### `npx storybook init`

> ## Run Storybook:

### `npm run storybook`

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

> ## Install Testing Library

### Next.js with Jest and React Testing Library

- ### `yarn add -D @testing-library/jest-dom @testing-library/react babel-jest jest`

After run the command then add the following files in root:

### 1. Create a _**test**_ folder and in the test folder add a new folder _**pages**_ then in the pages folder add _**index.test.js**_ after do these steps call the component which is in your pages/index.js

### _jest.config.js_

```module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  setupFiles: ["<rootDir>/.jest/setupEnvVars.js"],

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
```

### _jest.setup.js_

```// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
```

### _jsconfig.json_

```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/components/*": [
                "components/*"
            ],
            "@/mocks/*": [
                "__mocks__/*"
            ]
        }
    }
}
```

> ## Redux Installation

- ### `npm install redux`

- ### `npm install react-redux`

- ### `npm i redux-devtools-extension`

-  ### `npm i next-redux-wrapper`

React-Redux is conceptually pretty simple. It subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.

Use for Global State management
Added folder name store , store.js for configure store

### _store/action.js_

```
export const usersActionTypes = {
ADD_USER: "ADD_USER",
};

export const addUser = (newUser) => {
return { type: usersActionTypes.ADD_USER, user: newUser };
};
```

### _store/reducer.js_

```import { usersActionTypes } from "./action";

const usersInitialState = {
users: ["John Doe", "Mary Jane"],
};

export default function reducer(state = usersInitialState, action) {
switch (action.type) {
case usersActionTypes.ADD_USER: {
return { ...state, users: [...state.users, action.user] };
}
default:
return state;
}
}
```

### _pages/AddUser.js_

```
import React from "react";
import { wrapper } from "../store";
import { addUser } from "../store/users/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const AddUser = () => {
const dispatch = useDispatch();
const { users } = useSelector((state) => state.users);
const [name, setName] = useState("");

const addNewUser = () => {
dispatch(addUser(name));
};

const handleChange = (event) => {
setName(event.target.value);
};
return (

<div className="user-align">
<label>New User:</label>
<input type="text" value={name} onChange={handleChange} />
<button onClick={addNewUser}>Add</button>
<h4>User List:</h4>

      {users.map((user) => (
        <div>{user}</div>
      ))}
    </div>

);
};
```

> ## getServerSideProps (SSR)

### _pages/AddUser.js_

```
export const getServerSideProps = wrapper.getServerSideProps(
(store) => async () => {
const response = await fetch(
`https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
);
const { data } = await response.json();
store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
}
);
```

> ## client side rendering (CSR)

### _pages/index.js_

```

const Home = () => {
const [darkTheme, setDarkTheme] = useState(undefined);

const handleToggle = (event) => {
setDarkTheme(event.target.checked);
};

useEffect(() => {
const root = window.document.documentElement;
const initialColorValue = root.style.getPropertyValue(
"--initial-color-mode"
);
console.log("init", initialColorValue);

    setDarkTheme(initialColorValue === "dark");

}, []);
useEffect(() => {
if (darkTheme !== undefined) {
if (darkTheme) {
document.documentElement.setAttribute("data-theme", "dark");
window.localStorage.setItem("theme", "dark");
} else {
document.documentElement.removeAttribute("data-theme");
window.localStorage.setItem("theme", "light");
}
}
}, [darkTheme]);

return (

<div>
{darkTheme !== undefined && (
<div className="dark-mode">
{" "}
<label>
<input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
            />{" "}
Dark
</label>
</div>
)}
<main>
<h1 className="title">
Welcome to <a href="https:nextjs.org">Next.js!</a>
</h1>
</main>
</div>
```

> ## axios with getStaticProps

### _pages/axios.js_

```
export const getStaticProps = async () => {
const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
return {
props: { data: res.data.slice(0, 10) },
};
};
```




> ## Client-side data fetching with SWR

The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again

- ### `npm install swr`
```
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

> ## adding a global stylesheet

To add a stylesheet to your application, import the CSS file within pages/\_app.js.

### For example, consider the following stylesheet named styles.css:

```
body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}

```

### Create a pages/\_app.js file if not already present. Then, import the styles.css file

```

import '../styles.css'
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

```

### Import styles from node_modules

For global stylesheets, like bootstrap or nprogress, you should import the file inside pages/\_app.js. For example:

### _pages/\_app.js_

```
import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

> ## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

> ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
