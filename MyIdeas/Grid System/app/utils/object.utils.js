// a method which make the object enumable

export function generatorQueryConstructor(query)
{
    for (const key in query) {
        this[key] = query[key];
    }
}