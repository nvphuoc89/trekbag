import { buttonText } from "../lib/constants";
import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllComplete = useItemStore((state) => state.markAllComplete);
  const markAllIncomplete = useItemStore((state) => state.markAllIncomplete);
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const removeAllItem = useItemStore((state) => state.removeAllItem);

  const secondartButtons = [
    { text: buttonText.markAllComplete, onClick: markAllComplete },
    { text: buttonText.markAllIncomplete, onClick: markAllIncomplete },
    { text: buttonText.resetToInit, onClick: resetToInitial },
    { text: buttonText.removeAll, onClick: removeAllItem },
  ];
  return (
    <section className="button-group">
      {secondartButtons.map((button) => (
        <Button
          key={button.text}
          buttonType="secondary"
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
