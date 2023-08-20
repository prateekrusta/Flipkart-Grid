const express = require('express');
const dotenv = require('dotenv');
const router = new express.Router();

dotenv.config();

const openai = require('openai'); // Import the openai library

// Set your OpenAI API key
openai.apiKey = process.env.OPENAI_API_KEY;

router.post('/chat/driver', async (req, res) => {
    try {
        const chatCompletion = await openai.Completion.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: req.body.question }],
        });

        console.log(chatCompletion.choices[0].message.content);
        res.send(chatCompletion.choices[0].message.content);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
});

module.exports = router;
