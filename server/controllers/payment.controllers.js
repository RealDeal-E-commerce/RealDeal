const axios = require('axios');

module.exports = {
  add: async function(req, res) {
    const url = "https://developers.flouci.com/api/generate_payment"
    const payload = {
      "app_token": "50e694b9-7593-4cd3-a07f-f9e3719eb546",
      "app_secret": "e7b59e0c-a252-457f-a02e-31bd2b2b0db7",
      "amount": req.body.amount,
      "accept_card": true,
      "session_timeout_secs": 1200,
      "success_link": "http://localhost:3000/success",
      "fail_link": "http://localhost:3000/fail", 
      "developer_tracking_id": "cfeeb12a-1f2b-4365-afb4-00d7ef3fc81d"
    };

    try {
      const result = await axios.post(url, payload); 
      res.send(result.data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  },
  verify: async function(req, res) {
    try {
      const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'apppublic': '50e694b9-7593-4cd3-a07f-f9e3719eb546',
          'appsecret': 'e7b59e0c-a252-457f-a02e-31bd2b2b0db7'
        }
      });
      res.send(result.data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
};
