import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormFile from "./FormFile";
import Login from "./Login";
import Payment from "./Payment";
import PersonalizedAccountForm from "./PersonalizedAccountForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/FormFile" element={<FormFile />} />
        <Route
          path="/PersonalizedAccountForm"
          element={<PersonalizedAccountForm />}
        />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
