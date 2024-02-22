
import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { CharacterProps } from "@/models";

export function CharacterCard({
	selectedItem,
}: {
  selectedItem?: CharacterProps;
}) {
	return (
		<>
			<DialogHeader>
				<DialogTitle className="flex gap-2 items-center">
					<picture>
						<img
							src={selectedItem?.image}
							alt="char avatar"
							className="w-14 h-14 rounded-full"
						/>
  </picture>
					{selectedItem?.name}
  </DialogTitle>
				{selectedItem && (
  <DialogDescription className="flex flex-col gap-4">
						<span>
      {" "}
      {selectedItem.status}
      {" "}
    </span>
						<span>
      {" "}
      {selectedItem.species}
    </span>
						<span>
      {" "}
      {selectedItem.gender}
      {" "}
    </span>
						<span>
      {" "}
      {selectedItem.created}
      {" "}
    </span>
						<span>
      {" "}
      {selectedItem.url}
    </span>
					</DialogDescription>
				)}
  </DialogHeader>

  </>
	);
}
