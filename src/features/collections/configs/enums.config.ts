export enum CollectionSubjects {
    books = 'books',
    coins = 'coins',
    postcards = 'postcards',
    actionFigures = 'actionFigures',
    vinylRecords = 'vinylRecords',
    sportsJerseys = 'sportsJerseys',
    autographs = 'autographs',
    artPrints = 'artPrints',
    antiqueFurniture = 'antiqueFurniture',
    vintageClothing = 'vintageClothing',
    toys = 'toys',
    musicalInstruments = 'musicalInstruments',
    movieProps = 'movieProps',
    wristwatches = 'wristwatches',
    jewelry = 'jewelry',
    videoGames = 'videoGames',
    comicBooks = 'comicBooks',
    boardGames = 'boardGames',
    figurines = 'figurines',
    posters = 'posters',
    tickets = 'tickets',
    magazines = 'magazines',
    musicalRecords = 'musicalRecords',
    maps = 'maps',
    tradingPins = 'tradingPins',
    artifacts = 'artifacts',
    other = 'other',
}

export enum FieldTypes {
    integer = 'integer',
    string = 'string',
    text = 'text',
    boolean = 'boolean',
}

export enum CollectionFormSteps {
    collection,
    fields
}

export enum SortFormInputs {
    subject = 'subject',
    sortBy = 'sortBy',
    sortDirection = 'sortDirection',
}

export enum FieldsFormInputs {
    label = 'label',
    type = 'type',
}

export enum SortOptions {
    id = 'id',
    name = 'title',
}

export enum CollectionFormInputs {
    title = 'title',
    description = 'description',
    subject = 'subject',
    file = 'file',
}

export enum CollectionDataTabs {
    info,
    fields
}
