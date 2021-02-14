import React, { CSSProperties } from 'react';
import Typography from '..';

export enum LinkCategoryType {
    Default,
    Primary,
    Secondary
}

export interface ILinkProps {
    category?: LinkCategoryType;
    style?: CSSProperties;
    caption: string | JSX.Element;
    onClick?: () => void;
}

export interface ILinkStates {
}

export default class Link extends React.Component<ILinkProps, ILinkStates> {
    public render() {
        let linkCategory;
        if (this.props.category) {
            switch (this.props.category) {
                case LinkCategoryType.Primary:
                    linkCategory = 'fb-link-primary';
                    break;
                case LinkCategoryType.Secondary:
                    linkCategory = 'fb-link-secondary';
                    break;
                default:
                    linkCategory = 'fb-link';
                    break;
            }
        }
        else {
            linkCategory = 'fb-link';
        }
        return <Typography className={linkCategory} style={this.props.style} caption={this.props.caption} onClick={this.props.onClick} />;
    }
}