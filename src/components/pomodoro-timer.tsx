import React from 'react';
import { useInterval } from '../hooks/user-interval';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá mundo {mainTime}</div>;
}
