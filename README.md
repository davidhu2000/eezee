
<img src="./assets/images/300_icon.png" alt="logo" style="width: 300px;"/>

[eZ](https://play.google.com/store/apps/details?id=com.eezee) is an iOS application that provides users with a quick and easy way to search for movies across multiple streaming services. It utilizes a lightweight FireBase back-end, and React Native with a Flux/redux architecture to control the application state on the front-end.

eZ is a collaborative project by [Alex Sherman](https://github.com/asherman-ca), [David Hu](https://github.com/davidhu2000), and [Tom Ogasawara](https://github.com/tom-ogasawara).

## Features

- Simultaneous query multiple streaming services
- Search from any page using an integrated search bar
- Create user accounts with secure authentication
- Access links to available streaming sites directly from the app

#### Netflix Search:
![Search Netflix](./images/netflix_query.gif)

#### Amazon Search:
![Search Amazon](./images/amazon_query.gif)

#### User authentication:
![User authentication](./images/user_login.gif)

## Implementation

The application accepts some input from the user, e.g. "Silence of the Lambs" or "Batman," then interpolates the query into a call to the [GuideBox API](https://api.guidebox.com/docs), which returns a list of related movies. The app then filters the results and displays links to the five most relevant.

```JavaScript
queryMovies(query) {
  let url = `https://api-public.guidebox.com/v2/search?api_key=${api}&type=movie&field=title&precision=fuzzy&query=${query}`

  fetch(url)
  .then(
    res => res.json()
  ).then(
    resJson => {
      let movies = resJson.results;

      let titles = [];
      movies = movies.filter( movie => {
        let noteIncluded = titles.indexOf(movie.title) === -1
        titles.push(movie.title)
        return noteIncluded;
      });

      if(movies && movies.length > 5) {
        movies = movies.slice(0, 5);
      }
      this.setState({ fetching: false })
      this.props.receiveAllMovies(movies || []);
    }
  ).catch(
    err => console.log(err)
  );
}
```

When a user selects one of the displayed options, the application redirects to a page displaying which (if any) streaming services currently host the selected movie/tv show. Each available streaming option displays an icon with link directly to the content.

```JavaScript
renderStreamServices() {
  if(this.props.movie.subscription_web_sources && this.props.movie.subscription_web_sources.length > 0) {
    return this.props.movie.subscription_web_sources.map( st => (
        <View style={ styles.service } key={ st.display_name }>
          <TouchableOpacity onPress={ () => Linking.openURL(st.link) }>
            <View style={ styles.icons }>
              <Image source={this.renderIcon(st)} />
            </View>
          </TouchableOpacity>
        </View>
    ));
  } else {
    return (
      <View style={ styles.service }>
        <Text>No Streaming Available</Text>
      </View>
    );
  }
}
```

The search bar simply updates the query string in the application state, and changes the current scene of the application to the search results scene. The query for the movies will run as setup by the lifecyle methods

```js
  componentWillMount() {
    this.queryMovies(this.props.query);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this.queryMovies(newProps.query);
    }
  }
```

## Technology

### Frontend

Using the [Redux](https://github.com/reactjs/redux) implementation of the [Flux](https://facebook.github.io/flux/) design pattern, we set up actions, reducers, and a single store to manage data flow and to update the state of the application. We used [React Native](https://facebook.github.io/react-native/) to render an intuitive mobile UI by creating declarative React components, and styled them using React Native's integrated stylesheet system with pure JavaScript.

We used [npm](https://www.npmjs.com/) to manage all of the JavaScript packages, and the [Babel](https://babeljs.io/) transpiler to convert [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015) to [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition) and bundle it into a single file.

### Backend

We set up a lightweight back-end with secure user authentication using [FireBase](https://firebase.google.com/), and store user data in the [cloud](https://en.wikipedia.org/wiki/Cloud_storage) to ensure a consistent experience across different devices.

## Future Implementation

- Utilize Electron to create a desktop application.
- Create the full-stack web application.
- Add more search functionalities to query other types of data, such as riding sharing services.
- Add user recommendation based on prior searches and related movies to current search.
- Setup Facebook Login.
