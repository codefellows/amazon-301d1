# ![cf](http://i.imgur.com/7v5ASc8.png) City Explorer - Part 2

## Configuration

_Your repository must include the following config files:_
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `react` and `react-dom`
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.


```sh
city_explorer_react (repository)
├──public
│  └── index.html
├──src
│   └── index.js
│   └── components
│       └── app.js
│       └── header.js
│       └── search-form.js
│       └── search-results.js
│       └── result.js (exports each result component - ie: <Yelp>, <MovieDB> or each component may named/exported as its own file)
│       └── map.js
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```
## Resources
- [City Explorer Deployed Backend](https://city-explorer-backend.herokuapp.com)

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Requirements
Today, you will be re-packaging the components you created previously into their own files and importing/exporting those files accordingly.  You'll need to refactor your `<Search>` component to now be called `<SearchForm>`, which should be configured to pass location information to the `<Map>` component and have it render as such.  Along with refactoring your `<Search>` component, it's time to add a parent component for our individual search results.  That should be called `<SearchResults>` and should render out each result indivdually.

For example:

```
<SearchResults>
  <Result> -- should exist and be individually named for each set of API call results - for example:

  <Yelp lat="x" long="x">
  <MovieDB lat="x" long="x">
```

Upon completion, the component heirarchy of your application should look as follows:

```
<App>
  <Header>
  <SearchForm>
  <Map>
  <SearchResults>
    <Result> -- should exist and be individually named for each set of API call results - for example:

    <Yelp lat="x" long="x">
    <MovieDB lat="x" long="x">
```

#### `<App>`
* Should contain all child components and manage the application state.

```javascript
this.state = {
  location: {}
};
```

#### `<Header>`
* Should contain an `<h1>` with the title of your application (City Explorer).
* Should contain a `<p>` with the following text: "Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"

#### `<SearchForm>`
* Should contain `<form>` that makes a request to capture the users location and stores that in the application state for other components to use.

#### `<Map>`
* Should use the geo-location data from youur `<SearchForm>` to display a Google Map with a pin on your location.

#### `<SearchResults>`
* Should contain a container to house your `<Result>` components.

#### `<Result>`
* Should contain a container with the data from your API call.  This should be nested within a `<SearchResults>` parent component and each `<Result>` component should be individually created and named.  Essentially, this means that you should have a component for each API.  For example:  `<Yelp>`, `<MovieDB>`, `<DarkSky>`, `<EventBrite>`, etc.  Each one of these components should then render a `<ul>` with the data from that API.
