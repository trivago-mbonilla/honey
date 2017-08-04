node rest API
====
### Installation
Install modules
```npm
npm install
```

Run server
```npm
node server.js
```
### Test
* http://127.0.0.1:3000/api/hotels

### Stress test
```bash
ab -c 100 -n 100 "127.0.0.1:3000/api/hotels" 
```