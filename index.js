import express from 'express';
import longestWord from './Bootcamp/longestWord.js'
import shortestWord from './Bootcamp/shortestWord.js'
import wordLengths from './Bootcamp/wordLengths.js'
import totalPhoneBill from './Bootcamp/totalPhoneBill.js'
import enoughAirtime from './Bootcamp/enoughAirtime.js';

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get("/api/word_game", (req, res) => {

    const sentence=req.query.sentence;

    if (!sentence){
     res.json({
       error:'please enter a sentence to begin analysing.'
     });
    };
 res.json({
   "longestWord" : longestWord(sentence),
   "shortestWord" : shortestWord(sentence),
   "sum" : wordLengths(sentence)
   
  });
});

app.get("/api/phonebill/prices", (req, res) => {

    const billStr = req.query.billStr;
    res.json({
      "bill": totalPhoneBill(billStr)
     });
  });

app.post('/api/phonebill/total', (req, res) => {
  const bill = req.body.bill;
  res.json({
    message: 'Success',
    total : totalPhoneBill(bill)
  });
});

app.post('/api/phonebill/price', (req, res) => {
  const type = req.body.type;
  const price = req.body.price;

  res.json({
    status : 'success',
    message : `The ${type} was set to ${price}`
  });
});

app.get('/api/enough', (req, res) => {
  const usage = req.query.usage;
  const available = req.query.available;

  if(!usage || !available){
    res.json({
      error: 'Please enter usage and available airtime.'
    });
  };
  res.json({
    'totalBill': enoughAirtime(usage, available)
  });
});

app.post('/api/enough', (req, res) => {
  const usage = req.body.usage;
  const available = req.body.available;
  res.json({
    message : 'success',
    result : enoughAirtime(usage, available)
  });
});

const PORT = process.env.PORT || 3011;
app.listen(PORT, function(){
    console.log(`App started on ${PORT}`);
});