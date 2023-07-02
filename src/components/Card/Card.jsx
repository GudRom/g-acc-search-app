/* eslint-disable react/prop-types */
import "./Card.scss";

const Card = ({ userInfo }) => {
  const { avatar_url, html_url, login, type } = userInfo;
  return (
    <div className="card">
      <img className="card__avatar" src={avatar_url} alt="avatar" />
      <div className="card__text-box">
        <a
          className="card__user-name"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          title="Узнать больше"
        >
          {login}
        </a>
        <p className="card__info">{type}</p>
      </div>
    </div>
  );
};

export default Card;
