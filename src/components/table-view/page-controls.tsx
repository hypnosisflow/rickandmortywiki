import { PageControlsProps } from "@/types";
import { Button } from "../ui/button";

export const PageControls = ({ next, prev, max, cur }: PageControlsProps) => {
  return (
    <div className="mx-auto flex w-fit gap-4 items-center m-2  justify-center">
      <Button onClick={prev} size="sm" disabled={cur === 1}>
        Previous Page
      </Button>

      <span className="  text-xs font-medium">
        Page {cur} of {max}
      </span>

      <Button onClick={next} size="sm" disabled={cur === max}>
        Next Page
      </Button>
    </div>
  );
};
