import "./App.css";
import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch("https://restcountries.com/v3.1/all").then(
  (response) => response.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
