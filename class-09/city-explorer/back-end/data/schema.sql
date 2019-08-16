DROP TABLE weathers, yelps, movies, trails, events, locations;

CREATE TABLE IF NOT EXISTS locations ( 
    id SERIAL PRIMARY KEY, 
    search_query VARCHAR(255), 
    formatted_query VARCHAR(255), 
    latitude NUMERIC(10, 7), 
    longitude NUMERIC(10, 7),
    created_at BIGINT
  );

CREATE TABLE IF NOT EXISTS weathers ( 
    id SERIAL PRIMARY KEY, 
    forecast VARCHAR(255), 
    time VARCHAR(255),
    created_at BIGINT,
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );
  
CREATE TABLE IF NOT EXISTS yelps (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255), 
  image_url VARCHAR(255), 
  price CHAR(5), 
  rating NUMERIC(2,1), 
  url VARCHAR(255),
  created_at BIGINT,
  location_id INTEGER NOT NULL REFERENCES locations(id) 
);

CREATE TABLE IF NOT EXISTS movies ( 
  id SERIAL PRIMARY KEY, 
  title VARCHAR(255), 
  overview VARCHAR(1000), 
  average_votes NUMERIC(4,2), 
  total_votes INTEGER, 
  image_url VARCHAR(255), 
  popularity NUMERIC(6,4), 
  released_on CHAR(10),
  created_at BIGINT,
  location_id INTEGER NOT NULL REFERENCES locations(id) 
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY, 
  link VARCHAR(255), 
  name VARCHAR(255), 
  summary VARCHAR(1000),
  event_date CHAR(15), 
  created_at BIGINT,
  location_id INTEGER NOT NULL REFERENCES locations(id) 
);

CREATE TABLE IF NOT EXISTS trails ( 
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255), 
  location VARCHAR(255), 
  length NUMERIC(4, 1), 
  stars NUMERIC(2, 1), 
  star_votes INTEGER, 
  summary VARCHAR(255), 
  trail_url VARCHAR(255), 
  conditions TEXT, 
  condition_date CHAR(10), 
  condition_time CHAR(8),
  created_at BIGINT,
  location_id INTEGER NOT NULL REFERENCES locations(id) 
);
