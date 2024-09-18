type SortItem = {
    name: String;
    sortProperty: String;
}

export const SORT_PROPERTY: SortItem[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
]

