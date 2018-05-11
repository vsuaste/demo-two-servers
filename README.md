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

```curl -XPOST http://localhost:3000/graphql -H 'Content-Type: application/graphql' -d '{ germplasms{ specie } }' ```

```curl -XPOST http://localhost:3000/graphql -H 'Content-Type: application/graphql' -d '{ readOneGermplasm(nameToSearch: "B104 RIL 8-way"){ genus } }' ```
