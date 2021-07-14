import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MasterAdminLayout from './layouts/MasterAdminLayout';
import MasterClientLayout from './layouts/MasterClientLayout';
import ManageData from './pages/ManageData';
import Dashboard from './pages/Dashboard';

import "./assets/css/form-control.css";
import "./assets/css/table.css";
import "./assets/css/icons.css";
import "./assets/css/overflow-handle.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 'alamhafidz'
    };
  }
  render() {
    return (
      <StrictMode>
      <div className='app'>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={()=>(

                    <>Landing Page</>

                )}/>
              <Route  path="/users" render={()=>(

                  <MasterClientLayout>
                  
                      <Switch>
                        <Route  exact path={"/users/home"} render={()=>(<>Home Dashboard</>)}/>
                        <Route  exact path={"/users/profile"} render={()=>(<>Profile Dashboard</>)}/>
                        <Route render={()=><>404</>}/>
                      </Switch>

                      <Redirect from="/users" to="/users/home" />
                  </MasterClientLayout>

                )}/>

              <Route  path="/admin" render={()=>(
                  <MasterAdminLayout rootPath={`/users/${this.state.username}/`}>
                      <Switch>
                        <Route  exact path={"/admin/dashboard/main"} render={()=>(
                          <><Dashboard {...(this.props)}/></>
                        )}/>
                        <Route  exact path={"/admin/dashboard/manage_data"} render={()=>(
                          <><ManageData/></>
                        )}/>
                        <Route  exact path={"/admin/dashboard/explore_data"} render={()=>(<>Explore Data</>)}/>
                        <Route  exact path={"/admin/dashboard/manage_assets"} render={()=>(<>Assets Data</>)}/>
                        <Route render={()=><>404</>}/>
                      </Switch>
                      {/*comment redirect for assign 404 page*/}
                      <Redirect from="/admin" to="/admin/dashboard/main" />
                  </MasterAdminLayout>

                )}/>

              <Route exact path={"/*"} render={()=>(<>Tidak ditemukan</>)}/>
             
          </Switch>
        </BrowserRouter>
      </div>
      </StrictMode>
    );
  }
}
