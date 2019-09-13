# React Bootstrap

[React-Bootstrap](https://react-bootstrap.github.io/getting-started/why-react-bootstrap/) is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed, you have everything you need.

`npm install react-bootstrap bootstrap`
React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included css. However, some stylesheet is required to use these components.
How and which Bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN. A little more information about the benefits of using a CDN can be found here.

React-Bootstrap is compatible with existing Bootstrap themes. Just follow the installation instructions for your theme of choice.

Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors.

`create-react-app` custom themes
If you would like to add a custom theme on your app using Create React App, they have [additional documentation](https://create-react-app.dev/docs/adding-bootstrap#using-a-custom-theme) for Create React App and Bootstrap here
As of `react-scripts@2.0.0` you can import .scss files. This makes it possible to use a package's built-in Sass variables for global style preferences.

## Benifits of React Bootstrap

Methods and events using jQuery is done imperatively by directly manipulating the DOM. In contrast, React uses updates to the state to update the virtual DOM. In this way, React-Bootstrap provides a more reliable solution by incorporating Bootstrap functionality into React's virtual DOM. [See examples](https://react-bootstrap.github.io/getting-started/why-react-bootstrap/) of how React-Bootstrap components differ from Bootstrap.

### State

Since React-Bootstrap is built with React Javascript, state can be passed within React-Bootstrap components as a prop. It also makes it easier to manage the state as updates are made using React’s state instead of directly manipulating the state of the DOM. This also gives a lot of flexibility when creating more complex components.




## Customizing bootstrap to match components
see the [Bootstrap docs](https://getbootstrap.com/docs/4.3/getting-started/theming/) for details about customizing stylesheets to match your component use.


## Important React Bootstrap Components
You should import individual components like: react-bootstrap/Button rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client. [https://react-bootstrap.github.io/getting-started/introduction](https://react-bootstrap.github.io/getting-started/introduction)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
