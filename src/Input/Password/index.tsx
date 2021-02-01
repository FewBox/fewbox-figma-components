import React from "react";
import Input from "..";

export interface IPasswordProps {
    icon?: JSX.Element;
    placeholder?: string;
    name?: string;
}

export interface IPasswordProps {
}

export default class Password extends React.Component<IPasswordProps, IPasswordProps> {
    public render() {
        return <Input className="fb-password" type="password" icon={this.props.icon} placeholder={this.props.placeholder} name={this.props.name} />;
    }
}