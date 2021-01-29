import '../theme/_fewbox-default.scss';
import _Button, { ButtonType as _ButtonType, CategoryType as _CategoryType } from './Button';
//import _Signin from './Signin';

export namespace Plugin {
    export const Button = _Button;
    export const ButtonType = _ButtonType;
    export const CategoryType = _CategoryType;
    //export const Signin = _Signin;
}