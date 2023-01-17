import React from "react";
import { CellTypes } from "../../state";

interface AddCellButtonProps {
  label: string;
  type: CellTypes;
  click: (type: CellTypes) => void;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({
  label,
  type,
  click,
}) => {
  return (
    <button
      className="button is-rounded is-primary is-small"
      onClick={() => click(type)}
    >
      <span className="icon is-small">
        <i className="fas fa-plus"></i>
      </span>
      <span>{label}</span>
    </button>
  );
};

export default AddCellButton;
