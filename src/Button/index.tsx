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
    onClick?: () => void;
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
            case ButtonCategoryType.OutlinePrimary:
                buttonCategory = 'fb-button-outline-primary';
                break;
            case ButtonCategoryType.LinkPrimary:
                buttonCategory = 'fb-button-link-primary';
                break;
            case ButtonCategoryType.PrimaryVariant:
                buttonCategory = 'fb-button-primary-variant';
                break;
            case ButtonCategoryType.OutlinePrimaryVariant:
                buttonCategory = 'fb-button-outline-primary-variant';
                break;
            case ButtonCategoryType.LinkPrimaryVariant:
                buttonCategory = 'fb-button-link-primary-variant';
                break;
            case ButtonCategoryType.Secondary:
                buttonCategory = 'fb-button-secondary';
                break;
            case ButtonCategoryType.OutlineSecondary:
                buttonCategory = 'fb-button-outline-secondary';
                break;
            case ButtonCategoryType.LinkSecondary:
                buttonCategory = 'fb-button-link-secondary';
                break;
            case ButtonCategoryType.SecondaryVariant:
                buttonCategory = 'fb-button-secondary-variant';
                break;
            case ButtonCategoryType.OutlineSecondaryVariant:
                buttonCategory = 'fb-button-outline-secondary-variant';
                break;
            case ButtonCategoryType.LinkSecondaryVariant:
                buttonCategory = 'fb-button-link-secondary-variant';
                break;
            default:
                buttonCategory = 'fb-button-default';
                break;
        }
        return <button className={buttonCategory} type={buttonType} onClick={this.props.onClick} >{this.props.caption}</button>;
    }
}