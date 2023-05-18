import { FC } from 'react';
import { CaseProps } from './Case.props';

export const Case: FC<CaseProps> = ({index, className, ...props}): JSX.Element => {
  return (
    <div
      key={index}
    >
      {props.title}
      {props.description}

    </div>
  );
};