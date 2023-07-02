/* eslint-disable react/prop-types */
import { useFormField } from "../../hooks/useFormField";
import "./SearchForm.scss";
import { getResponseData } from "../../api/Api";

const SearchForm = ({ setUserInfo, setIsLoading }) => {
  const searchFieald = useFormField("");
  const getUserInfo = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getResponseData(searchFieald.value).then((res) => {
      setIsLoading(false);
      if (res) {
        setUserInfo(res.items[0]);
      }
    });
  };
  return (
    <form className="search-form" onSubmit={getUserInfo}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Искать здесь"
        onChange={searchFieald.onChange}
        value={searchFieald.value}
      />
      {searchFieald.isFault ? (
        <span className="search-form__error">Минимум 3 знака</span>
      ) : null}
      <button className="search-form__button" disabled={searchFieald.isFault}>
        Поиск
      </button>
    </form>
  );
};

export default SearchForm;
