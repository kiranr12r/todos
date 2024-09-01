const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// Endpoint to generate random todos
app.get('/api/todos', async (req, res) => {
    try {
        const todos = [];
        for (let i = 0; i < 7; i++) {
            // Fetch random title and description from an API
            const titleResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/' + (i + 1));
            const descriptionResponse = await axios.get('https://jsonplaceholder.typicode.com/comments/' + (i + 1));

            todos.push({
                id: i,
                title: titleResponse.data.title,
                description: descriptionResponse.data.body
            });
        }

        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong!');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
