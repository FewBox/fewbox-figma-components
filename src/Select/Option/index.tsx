import React from "react";

export interface IOptionProps {
    name: string;
    value: string | number;
}

export interface IOptionStates {
}

export default class Option extends React.Component<IOptionProps, IOptionStates> {
    public render() {
        return <option value={this.props.value}>{this.props.name}</option>;
    }
}