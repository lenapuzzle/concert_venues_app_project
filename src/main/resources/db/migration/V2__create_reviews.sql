CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
event_name VARCHAR(255) NOT NULL,
user_name VARCHAR(255) NOT NULL,
text TEXT,
rating INTEGER NOT NULL,
venue_id INTEGER REFERENCES concert_venues(id)
);