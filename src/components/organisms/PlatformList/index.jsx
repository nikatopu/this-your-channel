import { useState, useEffect } from "react";
import style from "./PlatformList.module.css";
import { useAppContext } from "../../../lib/AppContext";

const platformIcons = {
  YouTube: "/resources/svgs/youtube.svg",
  Instagram: "/resources/svgs/instagram.svg",
  TikTok: "/resources/svgs/tiktok.svg",
  Facebook: "/resources/svgs/facebook.svg",
  default: "/resources/svgs/youtube.svg",
};

export default function PlatformList() {
  const [filter, setFilter] = useState("");
  const { data, loading } = useAppContext();

  function useDebouncedValue(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
      const t = setTimeout(() => setDebounced(value), delay);
      return () => clearTimeout(t);
    }, [value, delay]);

    return debounced;
  }

  const debouncedFilter = useDebouncedValue(filter, 300);

  if (loading)
    return <div className="analytics-page">Loading analytics...</div>;

  const filteredPlatformsFull = data.platforms.filter((p) =>
    p.name.toLowerCase().includes(debouncedFilter.trim().toLowerCase())
  );

  const displayedPlatforms =
    debouncedFilter.trim() === ""
      ? filteredPlatformsFull.slice(0, 6)
      : filteredPlatformsFull;

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
        {displayedPlatforms.map((platform) => (
          <li key={platform.name} className={style.platformItem}>
            <div className={style.platformInfo}>
              <img
                src={platformIcons[platform.name] || platformIcons.default}
                alt={platform.name}
              />

              <strong>{platform.name}</strong>
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
