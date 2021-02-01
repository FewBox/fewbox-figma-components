import React from "react";

export interface ITextAreaProps {
    rows?: number;
    cols?: number;
    name?: string;
}

export interface ITextAreaStates {
}

export default class TextArea extends React.Component<ITextAreaProps, ITextAreaStates> {
    public render() {
        return <div className="fb-textarea">
            <textarea rows={this.props.rows} cols={this.props.cols} ></textarea>
        </div>;
    }
}