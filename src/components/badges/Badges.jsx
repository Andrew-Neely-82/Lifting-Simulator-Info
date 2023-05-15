import { muscleBadges } from './img/muscleBadges';
import { stages } from './img/stageBadges';
// import { leaderBadges } from './img/leaderboardBadges';
import './style.scss';

const Badges = () => {
  // const badges = [muscleBadges, leaderBadges];

  return (
    <div className="Badges_">
      <ul>
        {muscleBadges.map((info, key) => (
          <li key={key} className="Badges_item" data-category={info.cat}>
            <div className="Badges_image-and-content">
              <div className="Badges_badge-image">
                <a
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="Badges_link"
                >
                  <img
                    src={info.image}
                    alt={info.title}
                    title={info.title}
                    className="Badges_image"
                  />
                </a>
              </div>
              <div className="Badges_badge-content">
                <div className="badge-data-container">
                  <h1 className="Badges_title">{info.title}</h1>
                  <p className="Badges_text">{info.text}</p>
                  <ul className="Badges_rarity-list">
                    <li className="Badges_rarity-item">
                      <span className="Badges_rarity-title">
                        {info.rarity.title}
                      </span>
                      <span className="Badges_rarity-amount">
                        {info.rarity.amount}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {stages.map((info, key) => (
          <li key={key} className="Badges_item" data-category={info.cat}>
            <div className="Badges_image-and-content">
              <div className="Badges_badge-image">
                <a
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="Badges_link"
                >
                  <img
                    src={info.image}
                    alt={info.title}
                    title={info.title}
                    className="Badges_image"
                  />
                </a>
              </div>
              <div className="Badges_badge-content">
                <div className="badge-data-container">
                  <h1 className="Badges_title">{info.title}</h1>
                  <p className="Badges_text">{info.text}</p>
                  <ul className="Badges_rarity-list">
                    <li className="Badges_rarity-item">
                      <span className="Badges_rarity-title">
                        {info.rarity.title}
                      </span>
                      <span className="Badges_rarity-amount">
                        {info.rarity.amount}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Badges;
