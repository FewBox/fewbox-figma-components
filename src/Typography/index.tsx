import React from 'react';

export interface ITypographyProps {
    caption: string | JSX.Element;
    className: string;
    onClick?: () => void;
}

export interface ITypographyStates {
}

export default class Typography extends React.Component<ITypographyProps, ITypographyStates> {
    public render() {
        return <div className={this.props.className} onClick={this.props.onClick}>
            {this.props.caption}
        </div>;
    }
}