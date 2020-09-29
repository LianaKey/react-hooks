import { setConstantValue } from "typescript";


const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const asyncSimulate = async (payload, setData) => {
  const delay = (ms) =>
    new Promise((res, rej) => 
      setTimeout(getRandomInt(1, 5) > 2 ? res : rej, ms)
    );
  try {
    await delay(getRandomInt(500, 2000));
  } catch (e) {
    throw 'Something went wrong, try again';
  }
  setData(payload)
};

export default asyncSimulate;
