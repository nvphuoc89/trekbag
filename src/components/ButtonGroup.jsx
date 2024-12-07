import { buttonText } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({ buttonGroupHandle }) {
  const {
    handleMarkAllComplete,
    handleMarkAllIncomplete,
    hadleResetToInitial,
    handleRemoveAllItem,
  } = buttonGroupHandle;

  const secondartButtons = [
    { text: buttonText.markAllComplete, onClick: handleMarkAllComplete },
    { text: buttonText.markAllIncomplete, onClick: handleMarkAllIncomplete },
    { text: buttonText.resetToInti, onClick: hadleResetToInitial },
    { text: buttonText.removeAll, onClick: handleRemoveAllItem },
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
