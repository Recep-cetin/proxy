const { log, error } = console;
const tulind = require('tulind');
const { promisify } = require('util');
//Promisify Functions
const sma_async = promisify(tulind.indicators.sma.indicator);
const ema_async = promisify(tulind.indicators.ema.indicator);
const rsi_async = promisify(tulind.indicators.rsi.indicator);
const macd_async = promisify(tulind.indicators.macd.indicator);
const kama_async = promisify(tulind.indicators.kama.indicator);//msw_async
const lag_async = promisify(tulind.indicators.lag.indicator);
const bbands_async = promisify(tulind.indicators.bbands.indicator);
const cmo_async = promisify(tulind.indicators.cmo.indicator);//linreg_async
const dpo_async = promisify(tulind.indicators.dpo.indicator);
const edecay_async = promisify(tulind.indicators.edecay.indicator);
const fosc_async = promisify(tulind.indicators.fosc.indicator);
const hma_async = promisify(tulind.indicators.hma.indicator);
const linreg_async = promisify(tulind.indicators.linreg.indicator);//linregintercept
const linregslope_async = promisify(tulind.indicators.linregslope.indicator);
const dema_async = promisify(tulind.indicators.dema.indicator);
const linregintercept_async = promisify(tulind.indicators.linregintercept.indicator);
const max_async = promisify(tulind.indicators.max.indicator);
const md_async = promisify(tulind.indicators.md.indicator);
const min_async = promisify(tulind.indicators.min.indicator);
const mom_async = promisify(tulind.indicators.mom.indicator);//tema_inc
const msw_async = promisify(tulind.indicators.msw.indicator);
const roc_async = promisify(tulind.indicators.roc.indicator);
const rocr_async = promisify(tulind.indicators.rocr.indicator);
const stddev_async = promisify(tulind.indicators.stddev.indicator);
const stochrsi_async = promisify(tulind.indicators.stochrsi.indicator);
const sum_async = promisify(tulind.indicators.sum.indicator);
const tema_async = promisify(tulind.indicators.tema.indicator);//wilders_inc
const trima_async = promisify(tulind.indicators.trima.indicator);
const trix_async = promisify(tulind.indicators.trix.indicator);
const tsf_async = promisify(tulind.indicators.tsf.indicator);
const var_async = promisify(tulind.indicators.var.indicator);
const vhf_async = promisify(tulind.indicators.vhf.indicator);
const volatility_async = promisify(tulind.indicators.volatility.indicator);//zlema_inc
const wilders_async = promisify(tulind.indicators.wilders.indicator);
const wma_async = promisify(tulind.indicators.wma.indicator);
const zlema_async = promisify(tulind.indicators.zlema.indicator);


const zlema_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await zlema_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, zlema: d3[i] }));
  return data;
};
const wma_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await wma_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, wma: d3[i] }));
  return data;
};
const wilders_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await wilders_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, wilders: d3[i] }));
  return data;
};
const volatility_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await volatility_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, volatility: d3[i] }));
  return data;
};
const vhf_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await vhf_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, vhf: d3[i] }));
  return data;
};
const var_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await var_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, var: d3[i] }));
  return data;
};
const tsf_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await tsf_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, tsf: d3[i] }));
  return data;
};
const trix_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await trix_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, trix: d3[i] }));
  return data;
};
const trima_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await trima_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, trima: d3[i] }));
  return data;
};
const tema_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await tema_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, tema: d3[i] }));
  return data;
};
const sum_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await sum_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, sum: d3[i] }));
  return data;
};
const stochrsi_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await stochrsi_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, stochrsi: d3[i] }));
  return data;
};
const stddev_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await stddev_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, stddev: d3[i] }));
  return data;
};
const rocr_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await rocr_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, rocr: d3[i] }));
  return data;
};
const roc_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await roc_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, roc: d3[i] }));
  return data;
};
const sma_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await sma_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, sma: d3[i] }));
  return data;
};
const max_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await max_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, max: d3[i] }));
  return data;
};
const msw_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await msw_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, msw: d3[i] }));
  return data;
};
const min_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await min_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, min: d3[i] }));
  return data;
};
const md_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await md_async([d1], [30]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, md: d3[i] }));
  return data;
};
const dema_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await dema_async([d1], [50]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, dema: d3[i] }));
  return data;
};
const mom_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await mom_async([d1], [50]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, mom: d3[i] }));
  return data;
};
const linregintercept_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await linregintercept_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, linregintercept: d3[i] }));
  return data;
};
const hma_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await hma_async([d1], [10]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, hma: d3[i] }));
  return data;
};
const lag_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await lag_async([d1], [0.5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, lag: d3[i] }));
  return data;
};
const linreg_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await linreg_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, linreg: d3[i] }));
  return data;
};
const linregslope_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await linregslope_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, linregslope: d3[i] }));
  return data;
};
const ema_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await ema_async([d1], [21]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, ema: d3[i] }));
  return data;
};
const kama_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await kama_async([d1], [10]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, kama: d3[i] }));
  return data;
};
const rsi_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await rsi_async([d1], [21]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, rsi: d3[i] }));
  return data;
};
const dpo_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await dpo_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, dpo: d3[i] }));
  return data;
};
const edecay_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await edecay_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, edecay: d3[i] }));
  return data;
};
const fosc_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await fosc_async([d1], [5]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, fosc: d3[i] }));
  return data;
};
const cmo_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await cmo_async([d1], [3]);
  const d2 = results[0];
  const diff = data.length - d2.length;
  const emptyArray = [...new Array(diff)].map((d) => '');
  const d3 = [...emptyArray, ...d2];
  data = data.map((d, i) => ({ ...d, cmo: d3[i] }));
  return data;
};
const markers_inc = (data) => {
  //EMA21 CROSSOVER SMA100 - LONG
  //EMA21 CROSSUNDER SMA100 - SHORT
  data = data.map((d, i, arr) => {
    const long =
      arr[i]?.ema > arr[i]?.sma && arr[i - 1]?.ema < arr[i - 1]?.sma
        ? true
        : false;
    const short =
      arr[i]?.ema < arr[i]?.sma && arr[i - 1]?.ema > arr[i - 1]?.sma
        ? true
        : false;
    return { ...d, long, short };
  });
  return data;
};
const macd_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await macd_async([d1], [12, 26, 9]);
  const diff = data.length - results[0].length;
  const emptyArray = [...new Array(diff)].map((d) => '');

  const macd1 = [...emptyArray, ...results[0]];
  const macd2 = [...emptyArray, ...results[1]];
  const macd3 = [...emptyArray, ...results[2]];

  data = data.map((d, i) => ({
    ...d,
    macd_fast: macd1[i],
    macd_slow: macd2[i],
    macd_histogram: macd3[i],
  }));
  return data;
};
const bbands_inc = async (data) => {
  const d1 = data.map((d) => d.close);
  const results = await bbands_async([d1], [12, 26]);
  const diff = data.length - results[0].length;
  const emptyArray = [...new Array(diff)].map((d) => '');

  const bbands1 = [...emptyArray, ...results[0]];
  const bbands2 = [...emptyArray, ...results[1]];

  data = data.map((d, i) => ({
    ...d,
    bbands_middle: bbands1[i],
    bbands_lower: bbands2[i] - bbands1[i],
    bbands_upper: bbands2[i] + bbands1[i],
  }));
  return data;
};

module.exports = {
  sma_inc, ema_inc, markers_inc, rsi_inc, macd_inc,
  kama_inc, bbands_inc, cmo_inc, dpo_inc, edecay_inc, fosc_inc, hma_inc,
  lag_inc, linreg_inc, linregslope_inc, dema_inc, linregintercept_inc, max_inc
  , md_inc, min_inc, mom_inc, msw_inc, roc_inc, rocr_inc, stddev_inc, stochrsi_inc, sum_inc,
  tema_inc, trima_inc, trix_inc, tsf_inc, var_inc,vhf_inc,volatility_inc,wilders_inc,wma_inc
  ,zlema_inc
};
