/* SWITCH COMPONENT
   ========================================================================== */

import { useCallback, useState } from "react";

import Styled from "./switch.style";

interface IProps {
  onToggle?: (value: boolean) => void;
  className?: string;
}

const Switch = ({ onToggle, className }: IProps) => {
  const [isOn, setOn] = useState(false);

  const handleToggle = useCallback(() => {
    setOn(!isOn);
    onToggle?.(!isOn);
  }, [isOn, onToggle]);

  return (
    <Styled.Container className={className} onClick={handleToggle} isOn={isOn}>
      <Styled.Circle className="circle" isOn={isOn} />
    </Styled.Container>
  );
};

export default Switch;
