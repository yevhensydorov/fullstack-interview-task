const mockedFinCompanies = [
    {
        "id": "1",
        "name": "The Big Investment Company",
        "address": "14 Square Place",
        "postcode": "SW18UU",
        "frn": "234165"
    },
    {
        "id": "2",
        "name": "The Small Investment Company",
        "address": "12 Circle Square",
        "postcode": "SW18UD",
        "frn": "773388"
    },
    {
        "id": "3",
        "name": "Capital Investments",
        "address": "1 Capital Road",
        "postcode": "SW18UT",
        "frn": "078592"
    }
];

const mockedInvestments = [
    {
        "id": "1",
        "userId": "1",
        "firstName": "Billy",
        "lastName": "Bob",
        "investmentTotal": 1400,
        "date": "2020-01-01",
        "holdings": [{ "id": "2", "investmentPercentage": 1 }]
    },
    {
        "id": "2",
        "userId": "2",
        "firstName": "Sheila",
        "lastName": "Aussie",
        "investmentTotal": 20000,
        "date": "2020-01-01",
        "holdings": [{ "id": "1", "investmentPercentage": 0.5 }, { "id": "2", "investmentPercentage": 0.5 }]
    },
    {
        "id": "3",
        "userId": "1",
        "firstName": "Billy",
        "lastName": "Bob",
        "investmentTotal": 1300,
        "date": "2020-02-01",
        "holdings": [{ "id": "2", "investmentPercentage": 1 }]
    },
    {
        "id": "5",
        "userId": "1",
        "firstName": "Billy",
        "lastName": "Bob",
        "investmentTotal": 12000,
        "date": "2020-03-01",
        "holdings": [{ "id": "2", "investmentPercentage": 1 }]
    },
    {
        "id": "7",
        "userId": "3",
        "firstName": "John",
        "lastName": "Smith",
        "investmentTotal": 150000,
        "date": "2020-03-01",
        "holdings": [{ "id": "1", "investmentPercentage": 0.8 }, { "id": "3", "investmentPercentage": 0.2 }]
    }
];

const getUserHoldingsExpectedResult = [
    {
        "User": '1',
        'First Name': 'Billy',
        'Last Name': 'Bob',
        "Date": '2020-01-01',
        "Holding": 'The Small Investment Company',
        "Value": 1400
    },
    {
        "User": '2',
        'First Name': 'Sheila',
        'Last Name': 'Aussie',
        "Date": '2020-01-01',
        "Holding": 'The Big Investment Company',
        "Value": 10000
    },
    {
        "User": '2',
        'First Name': 'Sheila',
        'Last Name': 'Aussie',
        "Date": '2020-01-01',
        "Holding": 'The Small Investment Company',
        "Value": 10000
    },
    {
        "User": '1',
        'First Name': 'Billy',
        'Last Name': 'Bob',
        "Date": '2020-02-01',
        "Holding": 'The Small Investment Company',
        "Value": 1300
    },
    {
        "User": '1',
        'First Name': 'Billy',
        'Last Name': 'Bob',
        "Date": '2020-03-01',
        "Holding": 'The Small Investment Company',
        "Value": 12000
    },
    {
        "User": '3',
        'First Name': 'John',
        'Last Name': 'Smith',
        "Date": '2020-03-01',
        "Holding": 'The Big Investment Company',
        "Value": 120000
    },
    {
        "User": '3',
        'First Name': 'John',
        'Last Name': 'Smith',
        "Date": '2020-03-01',
        "Holding": 'Capital Investments',
        "Value": 30000
    }
]

module.exports = { mockedFinCompanies, mockedInvestments, getUserHoldingsExpectedResult }

