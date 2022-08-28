module.exports = async function getData() {
  return require('./dataset.json').map(schema => ({
    name: schema.id,
    type: Array.isArray(schema.type) ? schema.type.join(', ') : schema.type,
    comment: Array.isArray(schema.comment) ? schema.comment.map(({value}) => value).join(', ') : schema.comment.value,
    label: Array.isArray(schema.label) ? schema.label.map(({value}) => value).join(', ') : schema.label.value,
    domainIncludes: Array.isArray(schema.domainIncludes) ? schema.domainIncludes.map(({id}) => id).join(', ') : schema.domainIncludes.id,
    rangeIncludes: Array.isArray(schema.rangeIncludes) ? schema.rangeIncludes.map(({id}) => id).join(', ') : schema.rangeIncludes.id,
    isPartOf: Array.isArray(schema.isPartOf) ? schema.isPartOf.map(({id}) => id).join(', ') : schema.isPartOf.id,
    source: Array.isArray(schema.source) ? schema.source.map(({id}) => id).join(', ') : schema.source.id,
    subClassOf: Array.isArray(schema.subClassOf) ? schema.subClassOf.map(({id}) => id).join(', ') : schema.subClassOf.id,
    exactMatch: Array.isArray(schema.exactMatch) ? schema.exactMatch.map(({id}) => id).join(', ') : schema.exactMatch.id,
    equivalentProperty: Array.isArray(schema.equivalentProperty) ? schema.equivalentProperty.map(({id}) => id).join(', ') : schema.equivalentProperty.id,
    subPropertyOf: Array.isArray(schema.subPropertyOf) ? schema.subPropertyOf.map(({id}) => id).join(', ') : schema.subPropertyOf.id,
    supersededBy: Array.isArray(schema.supersededBy) ? schema.supersededBy.map(({id}) => id).join(', ') : schema.supersededBy.id,
    closeMatch: Array.isArray(schema.closeMatch) ? schema.closeMatch.map(({id}) => id).join(', ') : schema.closeMatch.id,
    equivalentClass: Array.isArray(schema.equivalentClass) ? schema.equivalentClass.map(({id}) => id).join(', ') : schema.equivalentClass.id,
    inverseOf: Array.isArray(schema.inverseOf) ? schema.inverseOf.map(({id}) => id).join(', ') : schema.inverseOf.id,
    sameAs: Array.isArray(schema.sameAs) ? schema.isPartOf.map(({id}) => id).join(', ') : schema.sameAs.id,
  }))
}

