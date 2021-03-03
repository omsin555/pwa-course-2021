import {BrowserRouter,Switch,Route} from 'react-router-dom';
import T from'./project/T';
import FriendList from './InClassRoom/FriendList';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path= "/test">
                    <FriendList />
                </Route>
                <Route path = "/">
                    <T />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;