import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LocationProps } from "@/types";

export const LocationLarge = ({ item }: { item: LocationProps }) => {
  const date = new Date(item.created).toLocaleDateString();

  return (
    <Card className="m-2 overflow-hidden">
      <div className="flex content-start p-2 ">
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>Type: {item.type} </CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <p>
          Dimension: <span className="font-medium ml-1">{item.dimension}</span>
        </p>
        <p>
          Residents:{" "}
          <span className="font-medium ml-1">{item.residents?.length}</span>
        </p>
        {/* {item.residents?.map((char) => (
          <p key={char}>{char}</p>
        ))} */}
        <p>
          Created: <span className="font-medium ml-1">{date}</span>
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">{item.url}</p>
      </CardFooter>
    </Card>
  );
};
