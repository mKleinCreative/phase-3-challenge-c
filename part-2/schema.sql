DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db;

DROP TABLE IF EXISTS guests CASCADE;
CREATE TABLE guests (
id  SERIAL ,
name VARCHAR ,
email VARCHAR ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE rooms (
id  SERIAL ,
number VARCHAR ,
capacity INTEGER ,
PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS bookings CASCADE;
CREATE TABLE bookings (
id  SERIAL ,
room_id INTEGER ,
guest_id INTEGER ,
check_in DATE ,
check_out DATE ,
PRIMARY KEY ("id")
);

ALTER TABLE bookings ADD FOREIGN KEY ("room_id") REFERENCES "rooms" ("id");
ALTER TABLE bookings ADD FOREIGN KEY ("guest_id") REFERENCES "guests" ("id");