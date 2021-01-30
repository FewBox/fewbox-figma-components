import React from "react";

export interface IFormProps {
}

export interface IFormStates {
}

export default class Form extends React.Component<IFormProps, IFormStates> {
    public render() {
        return <div className="fb-form">{this.props.children}</div>;
    }
}