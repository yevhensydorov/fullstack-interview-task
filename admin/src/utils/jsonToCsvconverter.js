const jsonToCsvconverter = (userHoldings) => {
    // From https://stackoverflow.com/questions/11257062/converting-json-object-to-csv-format-in-javascript#comment129317567_58769574
    return [Object.keys(userHoldings[0]), ...userHoldings.map(holding => Object.values(holding))].join('\n')
}

module.exports.jsonToCsvconverter = jsonToCsvconverter;
