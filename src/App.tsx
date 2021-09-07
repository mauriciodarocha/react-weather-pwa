import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './features/NotFoundPage';
import Weather from './features/Weather';

const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <header className="header">
          <nav>
            <span>
              <NavLink
                className={`link weather-btn`}
                exact
                to="/"
                activeClassName={'active'}
                >
                Hoje
              </NavLink>
            </span>
            <span>
              <NavLink
                className={`link weather-btn`}
                exact
                to="/week"
                activeClassName={'active'}
                >
                Semana
              </NavLink>
            </span>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route path="/" exact render={() => <Weather />} />
            <Route path="/week" exact render={() => <Weather week={true} />} />
            <NotFoundPage />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
