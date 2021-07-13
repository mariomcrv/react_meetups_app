import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetup";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // our domain is localhost:3000

  return (
    <Layout>
      <Switch>
        {/*with this we tell the browser to load different pages and do not concatenate the results based on the url */}
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
