
<img src="./assets/images/ez_icon.png" alt="logo" style="width: 400px;"/>

[eZ](https://itunes.apple.com/us/genre/ios/id36?mt=8) is an iOS application that provides users with a quick and easy way to search for movies across multiple streaming services. It utilizes a lightweight FireBase back-end, and React Native with a Flux/redux architecture to control the application state on the front-end.

eZ is a collaborative project by [Alex Sherman](https://github.com/asherman-ca), [David Hu](https://github.com/davidhu2000), and [Tom Ogasawara](https://github.com/tom-ogasawara).

![splash](./assets/images/*** SPLASH SCREENSHOT ***)

## Features

- Simultaneous query multiple streaming services
- Search from any page using an integrated search bar
- Create user accounts with secure authentication
- Access links to available streaming sites directly from the app

![search](./assets/images/*** SEARCH PAGE SCREENSHOT ***)

## Implementation

The application accepts some input from the user, e.g. "Silence of the Lambs" or "Batman," then interpolates the query into a call to the [GuideBox API](https://api.guidebox.com/docs), which returns a list of related movies. The app then filters the results and displays links to the five most relevant.

```JavaScript
let url = `https://api-public.guidebox.com/v2/movies/${this.props.movieId}?api_key=${api}`;

fetch(`${url}`)
  .then(
    res => res.json()
  ).then(
    resJson => {
      this.setState({ fetching: false });
      this.props.receiveMovie(resJson);
    }
  ).catch(
    err => console.log(err)
  );
```

When a user selects one of the displayed options, the application redirects to a page displaying which (if any) streaming services currently host the selected movie/tv show. Each available streaming option displays an icon with link directly to the content.

```JavaScript

```

## Technology

### Frontend

Using the [Redux](https://github.com/reactjs/redux) implementation of the [Flux](https://facebook.github.io/flux/) design pattern, we set up actions, reducers, and a single store to manage data flow and to update the state of the application. We used [React Native](https://facebook.github.io/react-native/) to render an intuitive mobile UI by creating declarative React components, and styled them using React Native's integrated stylesheet system with pure JavaScript.

We used [npm](https://www.npmjs.com/) to manage all of the JavaScript packages, and the [Babel](https://babeljs.io/) transpiler to convert [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015) to [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition) and bundle it into a single file.

### Backend

We set up a lightweight back-end with secure user authentication using [FireBase](https://firebase.google.com/), and store user data in the [cloud](https://en.wikipedia.org/wiki/Cloud_storage) to ensure a consistent experience across different devices.

## Future Implementation

[development readme](docs/README.md)
