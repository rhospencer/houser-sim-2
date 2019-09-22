-- CREATED TABLE --

CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(100),
    zip INT,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

-- INSERTING VALUES --

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES
    ('Spencer', '123 Street', 'St. George', 'UT', 84790, 'img@url.com', 100.95, 200.95),
    ('Jacob', '456 Street', 'Washington', 'UT', 84780, 'img@url.com', 300.95, 400.95);

SELECT * FROM houses;

-- ADD COLUMNS -- 
ALTER TABLE houses
ADD img TEXT,
    mortgage DECIMAL,
    rent DECIMAL;