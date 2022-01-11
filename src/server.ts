import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello there!'
  })
})

app.listen(3000, () => 
  console.log('Servidor está no AR!')
);