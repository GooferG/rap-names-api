const express = require('express');
const PORT = 8000;
const app = express();

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthPlace: 'London, England',
  },
  'kendrick lamar': {
    age: 34,
    birthName: 'Kendrick Lamar Duckworth',
    birthPlace: 'Compton, California',
  },
  eminem: {
    age: 49,
    birthName: 'Marshall Bruce Mathers III',
    birthPlace: 'St. Joseph, Missouri, U.S.',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Bennett',
    birthPlace: 'Chicago, Illinois',
  },
  unkown: {
    age: 0,
    birthName: 'unkown',
    birthPlace: 'unkown',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();

  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers['unkown']);
  }

  res.json(rappers[rapperName].birthName);
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}, better go CATCH IT!`);
});
