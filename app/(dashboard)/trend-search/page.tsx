import TrendSearchHeader from "@/features/trend-search/components/TrendSearchHeader/TrendSearchHeader";
import { TrendSearchResults } from "@/features/trend-search/components/TrendSearchResults/TrendSearchResults";
import React from "react";

function TrendSearch() {
  return (
    <div>
      <TrendSearchHeader />
      <div className="pr-11.75 pl-8 pt-8 bg-white">
        <TrendSearchResults />
      </div>
    </div>
  );
}

export default TrendSearch;
