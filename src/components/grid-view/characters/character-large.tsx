import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CharacterProps } from "@/types";

export const CharacterLarge = ({ item }: { item: CharacterProps }) => {
  const date = new Date(item.created).toLocaleDateString();
  return (
    <Card className="m-2 overflow-hidden">
      <div className="flex content-start p-2 ">
        <picture>
          <img
            src={item?.image}
            alt="char avatar"
            className="min-w-16 h-16 rounded-full "
          />
        </picture>
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>{item.gender} </CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <p>
          Status: <span className="font-medium ml-1">{item.status}</span>
        </p>
        <p>
          Species: <span className="font-medium ml-1">{item.species}</span>
        </p>
        <p>
          Type:{" "}
          <span className="font-medium ml-1">
            {item.type == "" ? "---" : item.type}{" "}
          </span>
        </p>
        <p>
          Origin: <span className="font-medium ml-1">{item.origin?.name}</span>
        </p>
        <p>
          Location:{" "}
          <span className="font-medium ml-1">{item.location?.name}</span>
        </p>
        {/* <p>Episode</p>
        {item.episode?.map((episode) => (
          <p key={episode}>{episode}</p>
        ))} */}

        <p>
          Created: <span className="font-medium ml-1">{date}</span>
        </p>
      </CardContent>
      <CardFooter className="text-xs">{item.url}</CardFooter>
    </Card>
  );
};
