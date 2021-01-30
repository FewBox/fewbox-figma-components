import '../theme/_fewbox-default.scss';
import _Button, { ButtonType as _ButtonType, ButtonCategoryType as _ButtonCategoryType } from './Button';
import _TextBox from './Input/TextBox';
import _IconUser from './Icon/User';
//import _Signin from './Signin';

export namespace Plugin {
    export const Button = _Button;
    export const ButtonType = _ButtonType;
    export const ButtonCategoryType = _ButtonCategoryType;
    export const TextBox = _TextBox;
    export const IconUser = _IconUser;
    //export const Signin = _Signin;
}