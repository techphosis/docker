import express from 'express';
import cors from 'cors';
const PORT=8000;
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

app.get('/', (request, response) => {
  return response.send('welcome to Docker project2');
});


//for all wrong path
app.all('*', function (req, res) {
  try {
      return res.status(200).send(`Wrong url path to Docker project`);
  } catch (error) {
      return res.status(400).send("some went wrong" + error);
  }
})

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
