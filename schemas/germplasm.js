module.exports = `
  type Germplasm  {
    germplasmAlias: String
    germplasmName: String
    genus: String
    specie: String
  }

  enum GermplasmField {
    germplasmAlias
    germplasmName
    genus
    specie
  }

  input searchGermplasmInput {
    field: GermplasmField
    value: typeValue
    operator: Operator
    searchArg: [searchGermplasmInput]
  }

  type Query {
    germplasms: [Germplasm]
    readOneGermplasm(nameToSearch: String): Germplasm
  }
`;
