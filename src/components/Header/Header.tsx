import { FC } from 'react';
import { HeaderProps } from './Header.props';
// import '../../assets/font-awesome.min.css';

export const Header: FC<HeaderProps> = ({...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} >
      ampilovs.ru
    </header>
  );
};