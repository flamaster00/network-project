import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NodeStore from './store/NodeStore'
import {IAppContext} from "./types";

export const Context = createContext<IAppContext | null>(null)
export const node = new NodeStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        network: new NodeStore()

    }
    }>
    <App />
    </Context.Provider>
);


