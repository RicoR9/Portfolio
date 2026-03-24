INSERT INTO genres (name) VALUES
('Action'),
('Drama'),
('Comedy'),
('Sci-Fi'),
('Horror');

INSERT INTO directors (name, birth_year) VALUES
('Christopher Nolan', 1970),
('Quentin Tarantino', 1963),
('Steven Spielberg', 1946);

INSERT INTO movies (title, year, genre_id, director_id) VALUES
('Inception', 2010, 4, 1),
('The Dark Knight', 2008, 1, 1),
('Pulp Fiction', 1994, 2, 2),
('Jurassic Park', 1993, 4, 3);