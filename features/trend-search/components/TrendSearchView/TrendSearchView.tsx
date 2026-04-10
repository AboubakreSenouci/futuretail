"use client";

import { useState } from "react";
import TrendSearchHeader from "../TrendSearchHeader/TrendSearchHeader";
import { TrendSearchResults } from "../TrendSearchResults/TrendSearchResults";
import { TrendSearchViewMode } from "../../types";

export function TrendSearchView() {
  const [view, setView] = useState<TrendSearchViewMode>("grid");

  return (
    <>
      <TrendSearchHeader view={view} onViewChange={setView} />
      <div className="bg-white px-4 pt-6 pb-8 sm:px-6 lg:px-8 xl:pr-12">
        <TrendSearchResults view={view} />
      </div>
    </>
  );
}
