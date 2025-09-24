import Text from "../../components/atoms/Text";
import PlatformList from "../../components/organisms/PlatformList";
import style from "./Analytics.module.css";

export default function Analytics() {
  return (
    <div className={style.container}>
      <Text type="heading" text="Analytics" size="large" className={style.heading} />
      <Text
        type="paragraph"
        text="Get a complete view of how your channels are growing with us right here."
      />

      <div className={style.insightsSection}>
        <Text type="heading" text="Insights" />
        <PlatformList />
      </div>

      <div className={style.watchTimeSection}>
        <Text type="heading" text="Watch Time" size="small" />
        {/* Chart */}
      </div>
    </div>
  );
}
