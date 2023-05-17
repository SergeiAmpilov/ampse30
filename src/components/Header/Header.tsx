import { FC } from 'react';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} >
      <div className="container">
        ampilovs.ru

        {/* nav menu */}
        <div>
        </div>
      </div>
    </header>
  );
};