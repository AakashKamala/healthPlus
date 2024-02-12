// const doctors=require("./doctorController");


const axios = require('axios');
require("dotenv").config();

const openaiApiKey = process.env.OPENAIAPIKEY;

async function sendMessageToChatGPT(medicalQuestion) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a medical assistant, providing responses to medical questions. and provide the details of one of the doctors that is being contained in "doctors" which you seem fit for the questionaire. If you cannot provide a relevant response, simply reply with "I am sorry, I cannot answer that question."' },
          { role: 'user', content: medicalQuestion },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

async function medicalAssistantController(req, res) {
  try {
    const medicalQuestion = req.query.question || '';
    const chatGptResponse = await sendMessageToChatGPT(medicalQuestion);

    res.status(200).json({ response: chatGptResponse });
  } catch (error) {
    console.error('Error in medicalAssistantController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = medicalAssistantController;

