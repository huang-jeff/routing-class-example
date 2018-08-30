# routing-class-example

## Objectives

* Describe what client side routing is
* Implement basic client side routing
* Link between client side routes

## What is client side routing?

Client side routing using the URL in the location bar to determine which component to render. Also, state can be passed in the location bar. For example, given the url `domain.tld/blogPost/123`, the blog post ID can be extracted to help the component being rendered make a choice as to what render. Query string parameters can also be extracted.

You can read the documentation here => [react-router-dom documentation](https://reacttraining.com/react-router/web/guides/quick-start)

## How do you implement basic client side routing?

In order to use client side routing, you'll need to install the [react-router-dom](https://www.npmjs.com/package/react-router-dom) node module. You can do it by running the following command:

```bash
npm install react-router-dom
```

Once the module has been installed, you can start using the library. You'll need a few different tools from the `react-router-dom` library. You can import the what you need to get started with the following piece of code:

```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
```

First, implement two routes, one route for the root landing page, and the second page for an About page. In the `App` class component add the following code inside the outmost `<div></div>` returned from the `render` method.

```javascript
<Router>
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/' component={Home} />
  </Switch>
</Router>
```

Create two functional components for `Home` and `About`, they don't have to have anything complicated in them, just different enough to be visually differentiated.

Finally, now you can go to the browser and try the different routes, you should see the appropriate components load.

You can read more about `Route` in its [documentation page](https://reacttraining.com/react-router/web/api/Route)

## How can you Navigate around in Client Side Routing?

Given that you have set up client side routes, now you need a way to navigate around. `react-router-dom` provides a special React component that allow you to do so without reloading the page.

In both the `Home` component, import the necessary piece of `react-router-dom`,

```javascript
import { Link } from 'react-router-dom'
```

Now you can add it to move around using client side routing

```javascript
<Link to='/about'>About Page</Link>
```

Repeat the process in the `About` Component.

You can read more about `Link` in its [documentation page](https://reacttraining.com/react-router/web/api/Link)