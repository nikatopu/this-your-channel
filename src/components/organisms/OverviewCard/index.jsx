import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./OverviewCard.module.css";

const languageFlags = {
  English: "🇬🇧",
  Spanish: "🇪🇸",
  French: "🇫🇷",
};

export default function OverviewCard({ data }) {
  const navigate = useNavigate();

  const { languages, minutesPublished, shortsExtractable, themes } = data;

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.cardHeader}>
          <h3>Your Channel Overview</h3>
        </div>

        <div className={style.cardBody}>
          <div className={style.statPill + " " + style.languages}>
            {languages.map((lang) => languageFlags[lang]).join(" ")}{" "}
            {languages.join(", ")}
          </div>
          <div className={style.statPill + " " + style.minutes}>
            <strong>{minutesPublished.toLocaleString()}</strong> mins of
            published content
          </div>
          <div className={style.statPill + " " + style.shorts}>
            <strong>{shortsExtractable}</strong> shorts can be extracted
          </div>

          <div className={style.profileCenter}>
            <img
              src={""}
              alt="Channel profile"
              className={style.profileImage}
            />
          </div>

          <div className={style.themePills}>
            <span>Top themes:</span>
            <div className={style.themesList}>
              {themes.map((theme) => (
                <div key={theme} className={style.themeItem}>
                  {theme}
                </div>
              ))}

              <div className={style.themeItem}>
                A Very Long Theme Name To Test Wrapping Lorem Ipsum Dolor Sit
                Amet
              </div>
            </div>
          </div>
        </div>

        <div className={style.cardFooter}>
          <button onClick={() => navigate("/analytics")}>Next &rarr;</button>
        </div>
      </div>
    </div>
  );
}
