import { FC } from 'react';
import { CaseProps } from './Case.props';
import cn from 'classnames';
import styles from './Case.module.css'


export const Case: FC<CaseProps> = ({index, className, ...props}): JSX.Element => {
  return (
    <div
      className={cn(className, styles.case)}
      key={index}
    >
      {props.title}
      {props.description}

    </div>
  );
};