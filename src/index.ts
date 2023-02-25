import { start } from './implementation';
import express from 'express';

const app = express();
app.listen(3000, () => {
  console.clear();
  console.log('='.repeat(20));
  start();
  console.log('='.repeat(20));
});
