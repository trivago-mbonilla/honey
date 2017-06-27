Honey
====

Honey test project, to play with the technologies we wanna try

### First comparasion
1. Run symfony server
```php
php BE/symfony/app/console server:run
```
2. Run node server
```npm
node /BE/node/server.js
```

Run symfony test:
```bash
ab -c 100 -n 100 "127.0.0.1:8000/hotels" 
```
Run node test:
```bash
ab -c 100 -n 100 "127.0.0.1:3000/api/hotels" 
```
### Symfony times
| concurrency | requests | Time taken for tests | Request per second | Time per request (across)|
|-------------|----------|----------------------|--------------------|--------------------------|
| 100         | 100      | 17.562 seconds       | 5.96 [#/sec]       | 167.837 [ms]             |
| 100         | 1000     | 172.304 seconds      | 5.80 [#/sec]       | 172.304 [ms]             |
| 1000        | 1000     | Error*               |-                   | -                        |
>apr_socket_recv: Connection reset by peer (104)

### Node times
| concurrency | requests | Time taken for tests | Request per second | Time per request (across)|
|-------------|----------|----------------------|--------------------|--------------------------|
| 100         | 100      | 0.167 seconds        | 597.53 [#/sec]     | 0.891 [ms]               |
| 100         | 1000     | 1.115 seconds        | 897.12 [#/sec]     | 1.130 [ms]               |
| 100         | 10000    | 8.424 seconds        | 1187.04 [#/sec]    | 0.842 [ms]               |
| 1000        | 1000     | 1.052 seconds        | 950.12 [#/sec]     | 1.052 [ms]               |