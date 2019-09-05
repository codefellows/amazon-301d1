# ![cf](http://i.imgur.com/7v5ASc8.png) City Explorer - Part 1
It's time to rebuild the City Explorer front end! We currently have a live City Explorer application running on 2 servers. The front end application is currently hosted at Github Pages.

That front end uses some older technologies that you worked with earlier in this course (jQuery and Handlebars).  It's time to upgrade into the newest tech ... namely, React!

One caveat is that we don't want our clients to feel the impact. The look, feel, and functionality needs to remain exactly as it is. We can do a facelift at a later date. Our priority right now is to get this running on React.

## Resources
- [City Explorer Deployed Backend](https://city-explorer-backend.herokuapp.com)

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
│  └── app.js
│  └── index.js
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## Overview
For this assignment, you will be re-implementing the City Explorer front end through the use of ReactJS.  Your goal for today is to get a static/placeholder representation of your application configured and setup so that we can progressively modularize and build against that throughout the week.  Essentially, you'll be setting up and building the scaffold today so that we can wire things together and integrate 3rd party APIs later on.

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
Create the following components, all within your `app.js` file.

#### `<App>`
* Should contain all child components, which are wrapped in `<React.Fragment>`.  The breakdown of child components is as follows.  We will be expanding on this structure throughout the week:

```
<App>
  <Header>
  <Main>
    <Search>
    <Map>
    <Result>
```

#### `<Header>`
* Should contain an `<h1>` with the title of your application (City Explorer).
* Should contain a `<p>` with the following text: "Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"

#### `<Main>`
* Should contain the homepage markup and subsequent components.  This includes the following:
1. A search box and button for searching for a location
2. A Google Maps placeholder
3. 5 result boxes that will be used to house results our future API calls.  You may use "lorem ipsum" text for now. Those APIs include: the Dark Sky API, Yelp API, Meetup API, MovieDB API, nd the Hiking Project API.

Use the current deployed site or your previous City Explorer front end code as a way to capture what features should exist.  All dynamic data should be filled with placeholder content for now.  We'll update this later in the week with real-time data from 3rd party APIs.

#### `<Search>`
* Should contain an `<input>` and a `<button>` element for searching for a location.  This does not have to be wired to work yet - just the markup is required.

#### `<Map>`
* Should contain a Google Map placholder.  This does not have to be wired up work yet - just the markup is required.

#### `<Result>`
* Should contain an `<section>` element with placeholder content that will be filled with real-time data later in the week.  You may simply nest 5 `<Result>` components inside of `<Main>` for the time being.  We will be recomposing this later in the week.
