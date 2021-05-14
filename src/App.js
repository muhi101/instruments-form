import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import InstrumentsForm from "./components/InstrumentsForm";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <CardHeader>
            <Header />
          </CardHeader>
          <CardBody>
            <InstrumentsForm />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
