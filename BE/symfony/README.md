ResAPI vs GraphQL
=====
**Description:** Test project to compare ResAPI vs GraphQL

**Status**: Work in Progress

**Goal**: create a time table to compare RestAPI vs GraphQL (php-symfony project)

**Library:** https://github.com/Youshido/GraphQLBundle

## Database
```bash
php bin/console doctrine:database:drop --force
```
```bash
php bin/console doctrine:database:create
```
```bash
php bin/console doctrine:schema:update --force
```

## Start

* run server
```php
php bin/console server:run
```

## Test

* Rest API doc: http://127.0.0.1:8000/api/doc
* GraphQL test: http://127.0.0.1:8000/graphql/explorer

getHotels
```graphql
query {
 hotels {
    id,
    name
 } 
}
```

getHotel
```graphql
query {
 hotel(id: ID) {
    id,
    name
 } 
}
```

createtHotel
```graphql
mutation {
  addHotel(name: "my new hotel") {
    id,
    name
  }
}
```

Stress Tests
=====

```bash
ab -c [currency] -n [times] "uri" 
```

RestAPI example
```bash
ab -c 100 -n 100 "127.0.0.1:8000/hotels" 
```

GraphQL query example
```bash
ab -c 100 -n 100 "127.0.0.1:8000/graphql/explorer?query=query%20%7B%0A%20%20hotels%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D"
```