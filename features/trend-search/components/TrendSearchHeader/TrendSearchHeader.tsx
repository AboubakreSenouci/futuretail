"use client";

import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { Chip, Tabs } from "@heroui/react";
import {
  ChartColumnBig,
  Funnel,
  Grid3X3,
  List,
  Package,
  Tag,
  X,
} from "lucide-react";
import { TrendSearchViewMode } from "../../types";

interface TrendSearchHeaderProps {
  view: TrendSearchViewMode;
  onViewChange: (view: TrendSearchViewMode) => void;
}

function TrendSearchHeader({ view, onViewChange }: TrendSearchHeaderProps) {
  return (
    <div className="m-0 flex flex-col gap-6 border border-border bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div>
        <Typography variant="semibold_24" className="text-foreground">
          Trend Search
        </Typography>
        <Typography variant="regular_14" className="text-muted mt-1">
          Find fashion apparel with text, object detection and reverse image
          search
        </Typography>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Button iconOnly className="w-9 h-9 bg-background">
            <Funnel size={16} className="text-primary" />
          </Button>
          <Typography variant="regular_14" className="text-foreground">
            Yellow outfit
          </Typography>
          <Button
            variant="outline"
            className="text-primary bg-background rounded-[40px] border-none "
            rightIcon={<X size={16} className="ml-2" />}
          >
            <Typography variant="medium_14">Clear Results</Typography>
          </Button>
        </div>
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <Tabs className="w-full max-w-full xl:pr-4 xl:max-w-lg text-center">
            <Tabs.ListContainer>
              <Tabs.List
                aria-label="Options"
                className="flex w-full flex-wrap justify-start text-muted *:w-fit *:px-2 *:py-1 *:text-sm *:font-normal *:data-[selected=true]:text-primary"
              >
                <Tabs.Tab id="daily" className="flex gap-1.5">
                  <Package size={16} />
                  <Typography variant="medium_14">Products</Typography>
                  <Chip className="bg-background text-primary">
                    <Typography variant="medium_12">11</Typography>
                  </Chip>
                  <Tabs.Indicator className="bg-white px-1 py-2" />
                </Tabs.Tab>
                <Tabs.Tab id="weekly" className="flex gap-1.5">
                  <ChartColumnBig size={16} />
                  <Typography variant="medium_14">Analytics</Typography>

                  <Tabs.Indicator className="bg-white" />
                </Tabs.Tab>
                <Tabs.Tab id="bi-weekly" className="flex gap-1.5">
                  <Tag size={16} />
                  <Typography variant="medium_14">Brand Stats</Typography>
                  <Chip className="bg-surface-soft text-muted">
                    <Typography variant="medium_12">2</Typography>
                  </Chip>
                  <Tabs.Indicator className="bg-white" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs.ListContainer>
          </Tabs>
          <div className="flex gap-2 xl:border-l xl:border-border xl:pl-4">
            <Button
              aria-label="Show results as grid"
              aria-pressed={view === "grid"}
              onClick={() => onViewChange("grid")}
              className={`rounded-[8px] px-3 ${
                view === "grid" ? "bg-[#ECEEF2]" : "bg-white"
              }`}
            >
              <Grid3X3 size={16} className="text-foreground" />
            </Button>

            <Button
              aria-label="Show results as list"
              aria-pressed={view === "list"}
              onClick={() => onViewChange("list")}
              className={`rounded-[8px] px-3 ${
                view === "list" ? "bg-[#ECEEF2]" : "bg-white"
              }`}
            >
              <List size={16} className="text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendSearchHeader;
