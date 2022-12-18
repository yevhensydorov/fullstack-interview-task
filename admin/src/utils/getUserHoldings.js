const getUserHoldings = (investments, financialCompanies) => {
    if (!investments || !financialCompanies || !investments.length || !financialCompanies.length) {
        return [];
    }

    return investments.reduce((result, currentValue) => {
        currentValue.holdings.forEach((holding) => {
            result.push({
                "User": currentValue.userId,
                "First Name": currentValue.firstName,
                "Last Name": currentValue.lastName,
                "Date": currentValue.date,
                "Holding": financialCompanies.find(finCompany => finCompany.id === holding.id).name,
                "Value": currentValue.investmentTotal * holding.investmentPercentage,
            });

        });

        return result;
    }, []);
};

module.exports.getUserHoldings = getUserHoldings;