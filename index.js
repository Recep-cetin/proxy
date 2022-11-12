const { log, error } = console;
const express = require('express');
const app = express(); 
const server = app.listen(process.env.PORT || 5000, log('Proxy server is running on port 5000'));

//app.get('/',(_,res) =>res.status(200).send('proxyserver is runink !'));

const got = require('got');
const cors = require('cors');

//Tulind Functions
const {
  sma_inc,
  ema_inc,
  markers_inc,
  rsi_inc,
  macd_inc,
  kama_inc,
  bbands_inc,
  cmo_inc,
  dpo_inc,
  edecay_inc,//max
  fosc_inc,
  hma_inc, 
  dema_inc,
  max_inc,
  min_inc,
  mom_inc,
  msw_inc,
  md_inc,
  roc_inc,//vhf_inc
  rocr_inc,
  sum_inc,
  stddev_inc,
  stochrsi_inc,
  tema_inc,
  trima_inc,
  trix_inc,
  tsf_inc,
  var_inc,
  vhf_inc,
  volatility_inc,
  wilders_inc,
  wma_inc,
  zlema_inc,
  linregintercept_inc,
  linreg_inc,
  linregslope_inc,
} = require('./indicators');

app.use(cors());
app.get('/:symbol/:interval', async (req, res) => {
  try {
    const { symbol, interval } = req.params;
    const resp = await got(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=500`
    );
    const data = JSON.parse(resp.body); 
    let klinedata = data.map((d) => ({
      time: d[0] / 1000,
      open: d[1] * 1,
      high: d[2] * 1,
      low: d[3] * 1,
      close: d[4] * 1,
      value:( d[2] * d[3] * d[4])/4100,//burası voulme hesaplama   
    }));
    klinedata = await kama_inc(klinedata);
    klinedata = await sma_inc(klinedata);
    klinedata = await ema_inc(klinedata);
    klinedata = markers_inc(klinedata);
    klinedata = await rsi_inc(klinedata);
    klinedata = await macd_inc(klinedata);
    klinedata = await bbands_inc(klinedata);
    klinedata = await cmo_inc(klinedata);//zlema_inc
    klinedata = await dpo_inc(klinedata);
    klinedata = await zlema_inc(klinedata);
    klinedata = await wma_inc(klinedata);
    klinedata = await wilders_inc(klinedata);
    klinedata = await volatility_inc(klinedata);
    klinedata = await vhf_inc(klinedata);
    klinedata = await var_inc(klinedata);
    klinedata = await tsf_inc(klinedata);
    klinedata = await trix_inc(klinedata);
    klinedata = await trima_inc(klinedata);
    klinedata = await tema_inc(klinedata);
    klinedata = await sum_inc(klinedata);
    klinedata = await stochrsi_inc(klinedata);
    klinedata = await stddev_inc(klinedata);
    klinedata = await max_inc(klinedata);
    klinedata = await msw_inc(klinedata);
    klinedata = await md_inc(klinedata); 
    klinedata = await min_inc(klinedata);
    klinedata = await mom_inc(klinedata);
    klinedata = await roc_inc(klinedata);
    klinedata = await rocr_inc(klinedata);
    klinedata = await dema_inc(klinedata);
    klinedata = await edecay_inc(klinedata);
    klinedata = await linregintercept_inc(klinedata);
    klinedata = await fosc_inc(klinedata);
    klinedata = await hma_inc(klinedata); 
    klinedata = await linreg_inc(klinedata);
    klinedata = await linregslope_inc(klinedata);
    res.status(200).json(klinedata);
  } catch (err) {
    res.status(500).send(err);
  }
});
