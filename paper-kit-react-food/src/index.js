/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";


import InfoPage from "views/matzip/InfoPage";

import Join from "views/matzip/Join";
import Login from "views/matzip/Login";
import InsertForm from "views/matzip/InsertForm";
import Freeboard from "views/matzip/board/Freeboard";
import Advboard from "views/matzip/board/Advboard"; 
import QNAboard from "views/matzip/board/QNAboard";
import InsertFormQNA from "views/matzip/InsertFormQNA";
import RestaurantInsert from "views/matzip/Restaurant/RestaurantInsert";
import RestaurantPage from "views/matzip/Restaurant/RestaurantPage";
import InsertFormAdImage from "views/matzip/InsertFormAdImage";
import Adview from "views/matzip/board/Adview";
import MoviesPage from "views/matzip/pagination/MoviesPage";
import RestB from "views/matzip/Restaurant/RestB";
import InfoPage2 from "views/matzip/Infopage2";
import InfoPage3 from "views/matzip/InfoPage3";
import RestH from "views/matzip/Restaurant/RestH";
import RestI from "views/matzip/Restaurant/RestI";
import RestY from "views/matzip/Restaurant/RestY";
import RestJ from "views/matzip/Restaurant/RestJ";
import RestD from "views/matzip/Restaurant/RestD";
import RestYY from "views/matzip/Restaurant/RestYY";
import RestG from "views/matzip/Restaurant/RestG";
import FreeView from "views/matzip/board/freeview";
import AdView from "views/matzip/board/Adview"
import RestaurantPage2 from "views/matzip/Restaurant/RestaurantPage2";
import Infopageget from "views/matzip/Infopageget";
import QnaView from "views/matzip/board/qnaView";
import RestaurantView from "views/matzip/Restaurant/RestaurantView";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />

      <Route 
      path="/adview/:num" 
      component={Adview} />

      <Route 
      path="/resview/:num" 
      component={RestaurantView} />


{/* 메뉴별 맛집 */}
      <Route
      path="/respagefood/한식"
      component={RestH}
      />
      <Route
      path="/respagefood/일식"
      component={RestI}
      />
      <Route
      path="/respagefood/양식"
      component={RestY}
      />
      <Route
      path="/respagefood/중식"
      component={RestJ}
      />
      <Route
      path="/respagefood/디저트"
      component={RestD}
      />
      <Route
      path="/respagefood/야식"
      component={RestYY}
      />
      <Route
      path="/respagefood/분식"
      component={RestB}
      />
      <Route
      path="/respagefood/기타"
      component={RestG}
      />

    


      <Route
      path="/respage"
      component={RestaurantPage}
      />

      <Route
      path="/respagefood"
      component={RestaurantPage2}
      />





      <Route
      path="/login"
      component={Login}
      />
      <Route
        path="/info"
        component={InfoPage}
      />
      <Route
        path="/info2"
        component={InfoPage2}
      />
      <Route
        path="/info3"
        component={InfoPage3}
      />


      <Route
        path="/infopageget"
        component={Infopageget}
      />



      <Route
        path="/freeinsert"
        component={InsertForm}
      />

      <Route
        path="/resinsert"
        component={RestaurantInsert}
      />

      <Route
        path="/qnainsert"
        component={InsertFormQNA}
      />

      <Route
        path="/adinsert"
        component={InsertFormAdImage}
      />


      <Route
        path="/adboardImage"
        component={InsertFormAdImage}
      />

      <Route
      path="/join"
      component={Join}
      />
    
      <Route
      path="/test"
      component={MoviesPage}
      />

      <Route
      path="/freeboard"
      component={Freeboard}
      />

      <Route 
      path="/freeview/:num" 
      component={FreeView} />

      <Route 
      path="/qnaview/:num" 
      component={QnaView} />


       <Route
      path="/advboard"
      component={Advboard}
      />
      <Route 
      path="/adview/:num" 
      component={AdView} />

       <Route
      path="/qnaboard"
      component={QNAboard}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
