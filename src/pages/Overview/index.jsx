import React from "react";
import { useAppContext } from "../../lib/AppContext";
import OverviewCard from "../../components/organisms/OverviewCard";

const OverviewPage = () => {
  const { data, loading, error } = useAppContext();

  if (loading) {
    return <div>Loading your overview...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <OverviewCard data={data} />;
};

export default OverviewPage;
