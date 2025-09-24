import { useState } from "react";
import style from "./PlatformList.module.css";
import { useAppContext } from "../../../lib/AppContext";

const platformIcons = {
  YouTube: "",
  Instagram: "",
  TikTok: "",
  Facebook: "",
};

export default function PlatformList() {
  const [filter, setFilter] = useState("");
  const { data, loading } = useAppContext();

  if (loading)
    return <div className="analytics-page">Loading analytics...</div>;

  // Filtering logic will be updated with useDebouncedValue later
  const filteredPlatforms = data.platforms.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h4>
          Platforms{" "}
          <span className={style.languageCount}>
            ({data.platforms.length} Languages)
          </span>
        </h4>

        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul className={style.platformList}>
        {filteredPlatforms.map((platform) => (
          <li key={platform.name} className={style.platformItem}>
            <div className={style.platformInfo}>
              {platformIcons[platform.name]}

              <span>{platform.name}</span>
            </div>

            <div className={style.platformStats}>
              <span>
                <strong>{platform.watchTime.toLocaleString()}</strong> WTime
              </span>

              <span>
                <strong>{platform.videos}</strong> Videos
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
