import "./add-cell.css";
import React from "react";
import { useActions } from "../../hooks/useActions";
import { CellTypes } from "../../state";
import AddCellButton from "./add-cell-button";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({
  previousCellId,
  forceVisible = false,
}) => {
  const { insertCellAfter } = useActions();

  const handleAddCell = (type: CellTypes) => {
    insertCellAfter(previousCellId, type);
  };

  return (
    <div className={`add-cell ${forceVisible ? "force-visible" : ""}`}>
      <div className="add-buttons">
        <AddCellButton label="Code" type="code" click={handleAddCell} />
        <AddCellButton label="Text" type="text" click={handleAddCell} />
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
