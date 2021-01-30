import React from "react";

export enum ButtonType {
    Reset,
    Submit,
    Button
}

export enum ButtonCategoryType {
    Primary,
    OutlinePrimary,
    LinkPrimary,
    PrimaryVariant,
    OutlinePrimaryVariant,
    LinkPrimaryVariant,
    Secondary,
    OutlineSecondary,
    LinkSecondary,
    SecondaryVariant,
    OutlineSecondaryVariant,
    LinkSecondaryVariant
}

export interface IButtonProps {
    type: ButtonType;
    category: ButtonCategoryType;
    caption: string | JSX.Element;
}

export interface IButtonStates {
}

export default class Button extends React.Component<IButtonProps, IButtonStates> {
    public render() {
        let buttonType;
        let buttonCategory;
        switch (this.props.type) {
            case ButtonType.Reset:
                buttonType = 'reset';
                break;
            case ButtonType.Submit:
                buttonType = 'submit';
                break;
            default:
                buttonType = 'button';
                break;
        }
        switch (this.props.category) {
            case ButtonCategoryType.Primary:
                buttonCategory = 'fb-button-primary';
                break;
            default:
                buttonCategory = 'fb-button-default';
                break;
        }
        return <button className={buttonCategory} type={buttonType}>{this.props.caption}</button>;
    }
}