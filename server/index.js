const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();
const { port, oauth } = require('./settings');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.post('/github/token', (req, res) => {
    const { code } = req.body;
    const { tokenUrl, clientId, clientSecret, redirectUri } = oauth;
    // GitHub wants everything in an url-encoded body
    const payload = qs.stringify({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });
    axios.post(tokenUrl, payload, { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } })
      // Github sends back the response as an url-encoded string
      .then(resp => qs.parse(resp.data))
      .then((data) => {
        res.json(data);
        const token = data.access_token;
      })
      .catch((err) => {
        console.error('Error while requesting a token', err.response.data);
        res.status(500).json({
          error: err.message,
        });
      });
  });
app.listen(port, (err) => {
  if (err) {
    console.error('Something wrong happened', err);
  }
  else {
    console.log(`server listening on port ${port}`);
  }
});