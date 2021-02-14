import React, { CSSProperties } from 'react';
import Typography from '..';

export enum LabelCategoryType {
    Default,
    Primary,
    Secondary
}

export interface ILabelProps {
    category?: LabelCategoryType;
    style?: CSSProperties;
    caption: string | JSX.Element;
}

export interface ILabelStates {
}

export default class Label extends React.Component<ILabelProps, ILabelStates> {
    public render() {
        let labelCategory;
        if (this.props.category) {
            switch (this.props.category) {
                case LabelCategoryType.Primary:
                    labelCategory = 'fb-label-primary';
                    break;
                case LabelCategoryType.Secondary:
                    labelCategory = 'fb-label-secondary';
                    break;
                default:
                    labelCategory = 'fb-label';
                    break;
            }
        }
        else {
            labelCategory = 'fb-label';
        }
        return <Typography className={labelCategory} style={this.props.style} caption={this.props.caption} />;
    }
}