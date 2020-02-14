# `NC-news`

To construct and host a frontend webpage to serve up information relating to northcoder news. The Information available includes topics, articles and comments. functionality will involve the ability to:

- view information on all topics and each topics articles
- view information on all articles
  - up vote and down vote any article by one vote
  - sort by:
    - date created (default)
    - votes
    - comment count
- Post new comments to articles
- view information of all comments from an article
  - up vote and down vote any comment by one vote
- Users can delete their own comments

---

## `Getting Started`

These instructions will provide you with a copy of the project on your local machine for development and testing purposes. See deployment for a link to a hosted system. notes on how to deploy the project on a live system.

On your local machine using terminal navigate to the directory where you want the repository to be situated.

in the terminal type:

```bash
git clone <Repository URL>

cd <newly created project folder>

git init -y

git remote remove origin

git remote add origin <YOUR-GITHUB-URL>
```

### `Prerequisites`

Node.js version needs to be v12.10.0 or higher.

dependencies that need to be installed to run the application:

- @reach/router: ^1.3.1,
- @testing-library/jest-dom: ^4.2.4,
- @testing-library/react": ^9.4.0,
- @testing-library/user-event": ^7.2.1,
- axios: ^0.19.2,
- react: ^16.12.0,
- react-dom: ^16.12.0,
- react-scripts: 3.3.1

---

### `Installing dependencies:`

navigate to the route directory of your projects repository using VScode or terminal then type the following:

```
npx create-react-app "my-app"

cd "my-app"

npm install axios

npm install @reach/router

```

---

### `Installing development dependencies:`

there are no development dependencies that need to be manually installed. "create-react-app" installs these automatically

---

### `Creating scripts`

there are no scripts that need to be manually created. "create-react-app" creates these automatically

in the package.json file you will see the created script files:

```
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```

### `Starting session in browser`

navigate to the route directory of your app using VScode or terminal then type the following:

```
npm start
```

### `Build app for production`

navigate to the route directory of your app using VScode or terminal then type the following:

```
npm run build
```

## `Running the tests`

In order to run the application and utils tests, run the following scripts:

```
npm test-utils
npm test
```

### `Break down into end to end tests`

Explain what these tests test and why

```

Give an example

```

### And coding style tests

Explain what these tests test and why

```

Give an example

```

## `Deployment`

https://github.com/northcoders/fe-nc-news/blob/master/netlify-deployment.md

## Built With

## Links

Please click here for the Hosted website:

please click here for the Hosted database:

[Heroku] https://be-nc-news-2.herokuapp.com/api - link to hosted webpage

## `Versioning`

We use [GitHub](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## `Authors`

- **Andrew Falls** - _Initial work_ - [Afalls89](https://github.com/Afalls89)
