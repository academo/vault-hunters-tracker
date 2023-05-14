import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <Application />;

// Render application in DOM
const appEl = document.getElementById('app');
if (appEl) {
  createRoot(appEl).render(app);
}
