import React, { useState } from "react";
import styled from "@emotion/styled";

const TextareaWrapper = styled.div`
  position: relative;
  width: 85%;
`;

const StyledLabel = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "-8px" : "15px")};
  left: 15px;
  transform: translateY(${({ isFocused }) => (isFocused ? "0" : "0")});
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  color: ${({ isFocused }) => (isFocused ? "#6a5acd" : "#b0b0b0")};
  pointer-events: none;
  background-color: #2b2b2b;
  padding: 0 5px;
  transition: all 0.3s ease;

  border: ${({ isFocused }) => (isFocused ? "1px solid #6a5acd" : "none")};
  border-radius: 4px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 85px;
  padding: 15px;
  border: 1px solid #4f4f4f;
  border-radius: 8px;
  font-size: 16px;
  background-color: #2b2b2b;
  color: #f0f0f0;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6a5acd;
    outline: none;
  }
`;

const TextareaInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value !== "");

  return (
    <TextareaWrapper>
      <StyledLabel isFocused={isFocused || value !== ""}>{placeholder}</StyledLabel>
      <StyledTextarea
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </TextareaWrapper>
  );
};

export default TextareaInput;
