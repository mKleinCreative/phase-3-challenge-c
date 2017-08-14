\COPY guests(id,name,email) FROM './data/guests.csv' DELIMITER ',' CSV HEADER;
\COPY rooms(id,number,capacity) FROM './data/rooms.csv' DELIMITER ',' CSV HEADER;
\COPY bookings(id,room_id,guest_id,check_in,check_out) FROM './data/bookings.csv' DELIMITER ',' CSV HEADER;
