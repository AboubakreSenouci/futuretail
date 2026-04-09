import TrendSearchHeader from "@/features/trend-search/components/TrendSearchHeader/TrendSearchHeader";
import { TrendSearchResults } from "@/features/trend-search/components/TrendSearchResults/TrendSearchResults";
import React from "react";

function TrendSearch() {
  return (
    <div className="min-w-0">
      <TrendSearchHeader />
      <div className="bg-white px-4 pt-6 pb-8 sm:px-6 lg:px-8 xl:pr-12">
        <TrendSearchResults />
      </div>
    </div>
  );
}

export default TrendSearch;
