import React from "react";
import Input from "..";

export interface ITextBoxProps {
    icon?: JSX.Element;
    placeholder?: string;
}

export interface ITextBoxProps {
}

export default class TextBox extends React.Component<ITextBoxProps, ITextBoxProps> {
    public render() {
        return <Input type="text" icon={this.props.icon} placeholder={this.props.placeholder} />;
    }
}