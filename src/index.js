import React from 'react';
import { render } from 'react-dom';
import AppContainer from './application';

let cycle = 0;

function update(progress) {
  // Update the state of the world for the elapsed time since last render
}

function draw() {
  // Draw the state of the world
  render((
  	<AppContainer cycle={cycle} />
  ), document.getElementById('app'))
}

function loop(timestamp) {
  var progress = timestamp - cycle

  update(progress)
  draw()

  cycle = timestamp
  window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
