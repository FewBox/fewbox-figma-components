import React from 'react';
import Option from './Option';

export interface SelectOption {
    name: string;
    value: string | number;
}

export interface ISelectProps {
    icon?: JSX.Element;
    options: SelectOption[];
    name?: string;
}

export interface ISelectStates {
}

export default class Select extends React.Component<ISelectProps, ISelectStates> {
    public render() {
        return <div className="fb-select">
            {!!this.props.icon && this.props.icon}
            <select name={this.props.name}>
                {this.props.options.map((option, optionIndex) => {
                    return <Option name={option.name} value={option.value} key={`${this.props.name}${optionIndex}`} />
                })}
            </select>
        </div>;
    }
}