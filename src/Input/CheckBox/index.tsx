import React from "react";
import Input from "..";

export interface ICheckBoxProps {
    icon?: JSX.Element;
    placeholder?: string;
    name?: string;
}

export interface ICheckBoxProps {
}

export default class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxProps> {
    public render() {
        return <Input className="fb-checkbox" type="checkbox" icon={this.props.icon} placeholder={this.props.placeholder} name={this.props.name} />;
    }
}