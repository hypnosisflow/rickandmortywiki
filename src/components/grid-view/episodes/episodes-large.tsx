import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { EpisodeProps } from "@/types";

export const EpisodesLarge = ({ item }: { item: EpisodeProps }) => {
  const date = new Date(item.created).toLocaleDateString();

  return (
    <Card className="m-2 overflow-hidden">
      <div className="flex content-start p-2 ">
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>Episode: {item.episode} </CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <p>
          Air Date: <span className="font-medium ml-1">{item.air_date}</span>
        </p>
        <p>
          Characters:{" "}
          <span className="font-medium ml-1">{item.characters?.length}</span>
        </p>
        <p>
          Created:<span className="font-medium ml-1"> {date}</span>
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">{item.url}</p>
      </CardFooter>
    </Card>
  );
};
