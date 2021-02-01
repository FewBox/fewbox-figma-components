import React from "react";

export interface IInputProps {
    icon?: JSX.Element;
    placeholder?: string;
    type: string;
    className: string;
    name?: string;
}

export interface IInputStates {
}

export default class Icon extends React.Component<IInputProps, IInputStates> {
    public render() {
        return <div className={this.props.className}>
            {!!this.props.icon && this.props.icon}
            <input placeholder={this.props.placeholder} type={this.props.type} name={this.props.name} />
        </div>;
    }
}