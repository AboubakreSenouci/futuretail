import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { Chip, Tabs } from "@heroui/react";
import { ChartColumnBig, Funnel, Package, Tag, X } from "lucide-react";

function TrendSearchHeader() {
  return (
    <div className="bg-white border border-border m-0 py-6 px-8 flex flex-col gap-6">
      <div className="">
        <Typography variant="semibold_24" className="text-foreground">
          Trend Search
        </Typography>
        <Typography variant="regular_14" className="text-muted mt-1">
          Find fashion apparel with text, object detection and reverse image
          search
        </Typography>
      </div>
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-2">
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
        <div>
          <Tabs className="w-full max-w-lg text-center">
            <Tabs.ListContainer>
              <Tabs.List
                aria-label="Options"
                className="w-fit text-muted *:py-1 *:px-2 *:w-fit *:text-sm *:font-normal *:data-[selected=true]:text-primary"
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
        </div>
      </div>
    </div>
  );
}

export default TrendSearchHeader;
