# Routing and Component Composition

## Learning Objectives

**Students will be able to ...**

* Implement React Routing via `<BrowserRouter />`
  * Page Level
  * Component Swapping
* Compose components hierarchically
* Create logical wrapper components
* Create functional wrapper components
* Utilize `children` in composed components

## Routing and Component Composition

### Routing

Using `react-router`, you can easily toggle the visbility of components (or even pages) based on the URL/Route that the user engages with.

`import { Route } from 'react-router-dom';`

To use Browser Router properly, you eliminate your use of `<a>` tags and instead use it's built-in `<Link>` component.

```javascript
<Link to="/">Home</Link>
<Link to="/stuff">Stuff</Link>
```

In practice, then, use the router component to look at either `/` or `/stuff` and based on that, displaying either the `Home` or the `List` component...

```javascript
 <Route exact path="/" component={Home} />
 <Route exact path="/stuff" render={() => <List>{items}</List>} />
```

### Component Composition - Logical

In this setup, you are sending your child components the raw data and allowing them to render the output as they decide.

```javascript

// Dashboard Wrapper
//  - feeds the SearchForm some methods
//  - then feeds the results some data

<Dashboard>
  <SearchForm handler={this.doTheSearch} />
  <Results data={this.state.results} />
</Dashboard>

// .. Results Component
<ul>
  {this.props.data.map( (item,i) => <li key={i}>{item}</li> );
</ul>

```

### Component Composition - Using Logic-less Children

This is typically used when your `children` are already in JSX form (pre-rendered) and you need to display them as a whole.  A good example might be a gallery of images

```javascript
<Dashboard>
  render() {
    let listings = {this.state.results.map( (item,i) => <li key={i}>{item}</li> );
  }
  <SearchForm handler={this.doTheSearch} />
  <Results>
    { listings.map( listing => listing ) }
  </Results>
</Dashboard>

// Results Component

<ul>
  {this.props.children}
</ul>

```
