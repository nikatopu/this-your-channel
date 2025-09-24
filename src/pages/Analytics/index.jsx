import { lazy, Suspense } from "react";
import Text from "../../components/atoms/Text";
import PlatformList from "../../components/organisms/PlatformList";
import style from "./Analytics.module.css";
import ErrorBoundary from "../../components/organisms/ErrorBoundary";

const LazyChart = lazy(() => import("../../components/organisms/Chart"));

export default function Analytics() {
  return (
    <div className={style.container}>
      <Text
        type="heading"
        text="Analytics"
        size="large"
        style={{ marginBottom: "0em" }}
      />
      <Text
        type="paragraph"
        text="Get a complete view of how your channels are growing with us right here."
        style={{ marginTop: "0.2em", marginBottom: "2em" }}
      />

      <div className={style.insightsSection}>
        <Text type="heading" text="Insights" />

        <PlatformList />
      </div>

      <div className={style.watchTimeSection}>
        <Text
          type="heading"
          text="Watch Time"
          size="small"
          style={{ marginBottom: "0em" }}
        />
        <Text
          type="paragraph"
          text="Tracks the overtime watch time gained over all locals and platforms"
          style={{ marginTop: "0.2em", marginBottom: "2em" }}
        />

        <ErrorBoundary>
          <Suspense
            fallback={
              <div className={style.loadingChart}>Loading Chart...</div>
            }
          >
            <LazyChart />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
