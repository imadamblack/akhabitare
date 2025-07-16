import { getCookie } from 'cookies-next';

export default async function FbEvent(req, res) {
  const {
    method,
    headers: {referer},
    body: {eventName, eventID, user},
  } = req;

  if (method !== 'POST') {
    return res.status(405).send({message: 'Only POST request allowed'});
  }

  const {createHash} = require('crypto');
  const hash = (string) => createHash('SHA256').update(string).digest('hex');

  const url = `https://graph.facebook.com/v14.0/${process.env.PIXEL}/events?access_token=${process.env.FB_CAPI_TOKEN}`;

  const data = {
    event_name: eventName,
    event_id: eventID,
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: referer,
    user_data: {
      fbc: getCookie('_fbc', {req, res}),
      fbp: getCookie('_fbp', {req, res}),
      em: [hash(user.em)],
      ph: [hash(user.ph)],
      external_id: [user.externalID],
      client_user_agent: req.headers['user-agent'],
      client_ip_address: req.ip || req.connection.remoteAddress,
    },
  };


  const fbPayload = {data: [data], test_event_code: process.env.FB_CAPI_TEST_EVENT_CODE};
  const ttPayload = {
    event_source: "web",
    event_source_id: process.env.TT_PIXEL,
    data: [
      {
        event: eventName,
        event_time: Math.floor(Date.now() / 1000),
        user: {
          email: hash(user.em),
          phone: hash(user.ph),
          external_id: user.externalID
        },
        page: {
          url: referer,
          referrer: referer
        }
      }
    ]
  }


  try {
    const fbResponse = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(fbPayload),
    })
    const fbRes = await fbResponse.json();

    const ttResponse = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Access-Token': process.env.TT_API_TOKEN},
      body: JSON.stringify(ttPayload),
    })
    const ttRes = await ttResponse.json();

    res.status(200).json({tt: ttRes, fb: fbRes})

  } catch (e) {
    console.error('API Event error', e)
  }

}