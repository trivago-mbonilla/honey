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

## MORE
* If you package depends on other TypeScript authored packages, 
put them in dependencies/devDependencies/peerDependencies just like you would with raw JS packages.

* If you package depends on other JavaScript authored packages and you want to use it type safely in your project, 
put their types e.g. @types/foo in devDependencies. 
JavaScript types should be managed out of bound from the main NPM streams. 
The JavaScript ecosystem breaks types without semantic versioning too commonly, 
so if your users need types for these they should install the @types/foo version that works for them.