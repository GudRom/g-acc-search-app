import { useState } from "react";
import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import "./App.scss";
import Loader from "../Loader/Loader";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="main">
      <h1 className="main__header">
        <span className="main__name-company">Find G</span> &ndash; поиск
        аккаунтов на GitHub
      </h1>
      <SearchForm setUserInfo={setUserInfo} setIsLoading={setIsLoading} />
      <p className="main__text">Результат поиска:</p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {userInfo ? (
            <Card userInfo={userInfo} />
          ) : (
            <p className="main__text">Запустите поисковую машину ⚙</p>
          )}
        </>
      )}
    </main>
  );
}

export default App;
