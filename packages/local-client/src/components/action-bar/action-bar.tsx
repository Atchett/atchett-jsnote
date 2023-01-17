import "./action-bar.css";
import React from "react";
import { useActions } from "../../hooks/useActions";
import ActionButton from "./action-button";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  const handleMoveUp = () => {
    moveCell(id, "up");
  };

  const handleMoveDown = () => {
    moveCell(id, "down");
  };

  const handleDelete = () => {
    deleteCell(id);
  };

  return (
    <div className="action-bar">
      <ActionButton icon="fa-arrow-up" click={handleMoveUp} />
      <ActionButton icon="fa-arrow-down" click={handleMoveDown} />
      <ActionButton icon="fa-times" click={handleDelete} />
    </div>
  );
};

export default ActionBar;
