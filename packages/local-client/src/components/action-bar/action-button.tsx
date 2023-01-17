import React from "react";

interface ActionButtonProps {
  icon: string;
  click: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, click }) => {
  return (
    <button className="button is-primary is-small" onClick={click}>
      <span className="icon">
        <i className={`fas ${icon}`}></i>
      </span>
    </button>
  );
};

export default ActionButton;
