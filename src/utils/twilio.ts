import { Twilio } from 'twilio';
const accountSid = 'AC396df905dfcef35da2cd2bd6babc42bf';
const authToken = '618c5ac71c66a30ed6fc7077bf86aa42';
//TWILIO_ACCOUNT_SID=AC396df905dfcef35da2cd2bd6babc42bf
//TWILIO_AUTH_TOKEN=618c5ac71c66a30ed6fc7077bf86aa42
const client = new Twilio(accountSid, authToken);

export const sendMessage = (to: string, from: string, body: string) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        to,
        from,
        body,
      })
      .then((message) => {
        resolve(message.sid);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
