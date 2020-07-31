import React from 'react';

interface Props {
  text: string;
  onCLick?: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onCLick} className={props.className}>
      {props.text}
    </button>
  );
}
