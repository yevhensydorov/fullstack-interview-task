const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const axios = require("axios");
const { getCsvReport } = require('./services/getCsvReport');

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

app.get("/investments/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const investments = await axios.get(`${config.investmentsServiceUrl}/investments/${id}`);

    res.send(investments.data[0]);
  } catch (e) {
    console.error(e);

    res.sendStatus(500);
  }
});

app.get("/generatecsv", async (_req, res) => {
  try {
    const csvReport = await getCsvReport();

    await axios.post(
      `${config.investmentsServiceUrl}/investments/export`,
      { data: csvReport },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    res.sendStatus(201);
  } catch (e) {
    console.log('Error while sendind the report:', e);
  }
});

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error occurred starting the server", err)
    process.exit(1)
  }
  console.log(`Server running on port ${config.port}`)
});
