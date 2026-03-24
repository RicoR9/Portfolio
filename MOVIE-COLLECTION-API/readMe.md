# Movie Collection API/ Filmikogu API

Lühike juhend projekti käivitamiseks.

## Käivitamine

### 1. Paigalda projekt

cd Projekt

npm install

Loo käsitsi fail `.env` projekti juurkausta ja kopeeri sinna `env.example` faili sisu.

### 2. Käivita MySQL Docker Desktopis

1. Ava **Docker Desktop**
2. Otsi **mysql** ja vajuta **Run**
3. Seadista:

   Container name: `movie_db`

   Host port: `3308`

   MYSQL_ROOT_PASSWORD=movie_root_pass
   MYSQL_DATABASE=moviedb
   MYSQL_USER=movieuser
   MYSQL_PASSWORD=moviepass123

4. Vajuta **Run**

### 3. Loo andmebaasi tabelid

1. Docker Desktopis kliki konteiner **movie_db** peale
2. Vali **Exec** tab
3. Kirjuta: `mysql -u movieuser -p` (parool: `moviepass123`)
4. Kirjuta: `USE moviedb;`
5. Kopeeri `schema.sql` sisu ja paste'i see exec tabi.
6. Kopeeri `seed.sql` sisu ja paste'i see samamoodi exec tabi.

### 4. Käivita server

npm run dev

Server töötab: **http://localhost:3000**

---

## Testimine

**1. Vaata filme:**

- `GET http://localhost:3000/movies`

**2. Registreeri ennast:**

- `POST http://localhost:3000/users`

{
"name": "Test",
"email": "test@test.com",
"password": "test123"
}

**3. Logi sisse:**

- `POST http://localhost:3000/users/login`

{
"email": "test@test.com",
"password": "test123"
}

Kopeeri token!

**4. Lisa film:**

- `POST http://localhost:3000/movies`
- Auth: Bearer Token (paste'i token)

{
"title": "The Dark Knight",
"year": 2008,
"genre_id": 1,
"director_id": 1
}

**5. Muuda filmi:**

- `PUT http://localhost:3000/movies/1`
- Auth: Bearer Token

{
"title": "Inception - Directors Cut",
"year": 2010,
"genre_id": 1,
"director_id": 1
}

**6. Kustuta film:**

- `DELETE http://localhost:3000/movies/1`
- Auth: Bearer Token

## API Endpoint'id

### Movies

- `GET /movies` - Kõik filmid
- `GET /movies/:id` - Valitud film
- `POST /movies` - Lisa film
- `PUT /movies/:id` - Muuda filmi
- `DELETE /movies/:id` - Kustuta film

### Genres

- `GET /genres` - Kõik žanrid
- `POST /genres` - Lisa žanr
- `PUT /genres/:id` - Muuda žanri
- `DELETE /genres/:id` - Kustuta žanr

### Directors

- `GET /directors` - Kõik režissöörid
- `POST /directors` - Lisa režissöör
- `PUT /directors/:id` - Muuda režissööri
- `DELETE /directors/:id` - Kustuta režissöör

### Users

- `POST /users` - Registreeri
- `POST /users/login` - Logi sisse

---

## Testid

Käivita kõik testid:

npm test

Katvus:

npm run coverage
