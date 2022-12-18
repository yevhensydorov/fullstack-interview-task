const { getUserHoldings } = require('../utils/getUserHoldings');
const { mockedFinCompanies, mockedInvestments, getUserHoldingsExpectedResult } = require('../mocks/mockedData');

test('Get correct user holdings array', () => {
    const userHoldings = getUserHoldings(mockedInvestments, mockedFinCompanies);

    expect(userHoldings).toEqual(expect.arrayContaining(getUserHoldingsExpectedResult));
});

test('Get empty array if pass falsy values', () => {
    const userHoldingsWithEmptyInvestmentsList = getUserHoldings([], mockedFinCompanies);
    const userHoldingsWithEmptyFinCompaniesList = getUserHoldings(mockedInvestments, []);
    const userHoldingsWithUndefinedInvestmentsList = getUserHoldings(undefined, mockedFinCompanies);
    const userHoldingsWithUndefinedFinCompaniesList = getUserHoldings(mockedInvestments, undefined);
    const userHoldingsWithBothValuesUndefined = getUserHoldings(undefined, undefined);

    expect(userHoldingsWithEmptyInvestmentsList).toEqual([]);
    expect(userHoldingsWithEmptyFinCompaniesList).toEqual([]);
    expect(userHoldingsWithUndefinedInvestmentsList).toEqual([]);
    expect(userHoldingsWithUndefinedFinCompaniesList).toEqual([]);
    expect(userHoldingsWithBothValuesUndefined).toEqual([]);
});