import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Contacts from "./core/Contacts"
import Blogs from "./core/Blogs"
import Projects from "./core/Projects"
import Skills from "./core/Skills"


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          < Route path="/home" exact component={Home} />
          < Route path="/contacts" exact component={Contacts} />
          < Route path="/blogs" exact component={Blogs} />
          < Route path="/projects" exact component={Projects} />
          < Route path="/skills" exact component={Skills} />
          
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;