
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { LocationProps } from "@/models";

export function LocationCard({
	selectedItem,
}: {
  selectedItem: LocationProps | undefined;
}) {
	return (
		<>
			<DialogHeader>
				<DialogTitle className="flex gap-2 items-center">
					{selectedItem?.name}
  </DialogTitle>
				<DialogDescription className="flex flex-col gap-4">
					<span>
    {" "}
    {selectedItem?.type}
    {" "}
  </span>
					<span>
    {" "}
    {selectedItem?.dimension}
  </span>
					{/* todo: residents */}
					{/* <span> {selectedItem.residents} </span> */}
					<span>
    {" "}
    {selectedItem?.created}
    {" "}
  </span>
					<span>
    {" "}
    {selectedItem?.url}
  </span>
  </DialogDescription>
  </DialogHeader>
  </>
	);
}
