import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import { BrowserRouter } from 'react-router-dom';
// Import your components here

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./Services/Reducers/rootReducer";

const store = createStore(rootReducer)
console.log(store);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode >,
);