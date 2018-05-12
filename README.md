# Demo for graphql backend communicating wiht two servers

Backend demo for ``Germplasm`` model 
```
germplasmAlias: String

germplasmName: String

genus: String

specie: String
```

## Set up
Clone the repository and run:
```
$ npm install
$ node server.js
```

## Example of use

The idea of this implementation is for you to run this backend and then run the [user interface](https://github.com/vsuaste/ui-demo). From there you will be able to perform the queries: getAllGermplasms and getOneGermplasmById.  

Nevertheless you can also try the server itself without the user interface, for example:

```curl -XPOST http://localhost:3000/graphql -H 'Content-Type: application/graphql' -d '{ germplasms{ specie } }' ```

```curl -XPOST http://localhost:3000/graphql -H 'Content-Type: application/graphql' -d '{ readOneGermplasm(nameToSearch: "B104 RIL 8-way"){ genus } }' ```
