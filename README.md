# Countdown-Timer

## Installation

```
Using npm
$ npm install @dustyjay/countdown-timer
```

```
Using yarn
$ yarn add @dustyjay/countdown-timer
```

## Usage

```
import { Countdown } from '@dustyjay/countdown-timer'

var interval;

var timer = Countdown('2021-12-25');
interval = setInterval(() => {
  const result = timer.startCountdown();
  console.log(result) // { days, hours, minutes, seconds, isComplete}
  if (result.isComplete) {
    clearInterval(interval);
  }
}, 1000);

```

## [NPM Package](https://www.npmjs.com/package/@dustyjay/countdown-timer)

Package Repo: [https://github.com/dustyjay/Countdown-Timer](https://github.com/dustyjay/Countdown-Timer)

A light-weight package for a simple countdown timer
