import { useNavigate } from "react-router-dom";
import style from "./OverviewCard.module.css";
import profilePicture from "/resources/profile.png";
import Text from "../../atoms/Text";
import FlagIcon from "../../atoms/FlagIcon";

export default function OverviewCard({ data }) {
  const navigate = useNavigate();

  const { languages, minutesPublished, shortsExtractable, themes } = data;

  const languagesJoined =
    languages.length > 1
      ? languages.slice(0, -1).join(", ") + " and " + languages.slice(-1)
      : languages[0];

  return (
    <div className={style.container}>
      <div className={style.content}>
        <Text
          text="Your Channel Overview"
          type="heading"
          size="small"
          className={style.cardTitle}
        />

        <div className={style.statPill + " " + style.languages}>
          <div className={style.flagsContainer}>
            {languages.map((lang) => (
              <FlagIcon key={lang} language={lang} />
            ))}
          </div>
          <strong>{languagesJoined}</strong>
        </div>

        <div className={style.statPill + " " + style.minutes}>
          <span>
            <strong>{minutesPublished.toLocaleString()}</strong> mins of
            published content
          </span>
        </div>

        <div className={style.statPill + " " + style.shorts}>
          <img
            src="/resources/modal/shorts.png"
            alt="Shorts icon"
            className={style.shortsIcon}
          />
          <span>
            <strong>{shortsExtractable}</strong> shorts can be extracted
          </span>
        </div>

        <div className={style.profileCenter}>
          <video autoPlay muted loop className={style.profileVideo}>
            <source
              src="/resources/artboard-profile-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <img
            src={profilePicture}
            alt="Channel profile"
            className={style.profileImage}
          />
        </div>

        <div className={style.themePills + " " + style.themes}>
          <span className={style.themesContent}>
            Top themes: &nbsp;
            <strong className={style.cutOffWithDots}>
              {themes.join(", ")}, Lorem ipsum for testing the layout of the card
            </strong>
          </span>
        </div>

        <button
          onClick={() => navigate("/analytics")}
          className={style.nextButton}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
