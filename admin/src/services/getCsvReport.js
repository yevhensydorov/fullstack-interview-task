const config = require("config");
const axios = require("axios");
const { getUserHoldings } = require('../utils/getUserHoldings');
const { jsonToCsvconverter } = require('../utils/jsonToCsvconverter');

const getCsvReport = async () => {
    const allInvestmentsResponse = await axios.get(`${config.investmentsServiceUrl}/investments`).catch(e => console.log('Fetching investments error:', e));
    const allFinancialCompaniesResponse = await axios.get(`${config.financialCompaniesServiceUrl}/companies`).catch(e => console.log('Fetching companies error:', e));

    const userHoldings = getUserHoldings(allInvestmentsResponse.data, allFinancialCompaniesResponse.data);

    return jsonToCsvconverter(userHoldings);
}

module.exports.getCsvReport = getCsvReport;
