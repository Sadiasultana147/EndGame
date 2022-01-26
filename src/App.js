
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import Spots from './Components/Spots/Spots';
import NotFound from './Components/NotFound/NotFound';
import CoxBazars from './Components/Cox\'sBazar/CoxBazars';
import TeaGardens from './Components/TeaGardens/TeaGardens';
import Khagracharies from './Components/Khagracharies/Khagracharies';
import Comillas from './Components/Comillas/Comillas';
import AuthProvider from './Components/Context/AuthProvider';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import ManageBlogs from './Components/ManageBlogs/ManageBlogs';
import Blogs from './Components/Blogs/Blogs';
import BlogAdd from './Components/Ratings/BlogAdd';
import Details from './Components/Details/Details';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/spots">
              <Spots></Spots>
            </Route>
            <Route path="/coxbazar">
              <CoxBazars></CoxBazars>
            </Route>
            <Route path="/teagarden">
              <TeaGardens></TeaGardens>
            </Route>
            <Route path="/comilla">
              <Comillas></Comillas>
            </Route>
            <Route path="/khagrachari">
              <Khagracharies></Khagracharies>
            </Route>
            <PrivateRoute path="/manageblogs">
              <ManageBlogs></ManageBlogs>
            </PrivateRoute>
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/addblogs">
              <BlogAdd></BlogAdd>
            </Route>
            <Route path="/blogDetails/:blogId">
              <Details></Details>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
