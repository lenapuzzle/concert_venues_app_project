DROP TABLE IF EXISTS concert_venues;

CREATE TABLE concert_venues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  capacity INTEGER,
  description TEXT,
  img_url VARCHAR(255)
);