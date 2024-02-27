import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CharacterProps } from "@/models";

export const CharacterLarge = ({ item }: { item: CharacterProps }) => {
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
        <p>{item.status}</p>
        <p>{item.species}</p>
        <p>{item.created}</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
