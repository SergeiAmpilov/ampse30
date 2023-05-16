import { FC } from 'react';
import styles from './TestComponent.module.css';
import { ITestComponentsProps } from './TestComponent.props';



export const TestComponent: FC<ITestComponentsProps> = ( { name, className, ...props } ): JSX.Element => {
  return (<p 
    className={className}
    {...props}>
    Test Component is allready Here, { name }
  </p>);
};