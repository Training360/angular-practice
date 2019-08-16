# Angular cheatsheet

## Speedup angular build under development
Include this to the `angular.json` file, into the  
`projects.architect.build.options` object:  
```json
    "optimization": false,
    "outputHashing": "none",
    "sourceMap": false,
    "extractCss": true,
    "namedChunks": false,
    "showCircularDependencies": false,
    "aot": true,
    "extractLicenses": false,
    "statsJson": false,
    "progress": true,
    "vendorChunk": true,
    "buildOptimizer": false,
```
The aot options can't be duplicated, if it exists, overwrite to true.
