import React, { CSSProperties } from "react";
import Icon from "..";
import LogoSvg from "../../svgs/logo.svg";

export interface ILogoProps {
    style?: CSSProperties;
}

export interface ILogoStates {
}

export default class Logo extends React.Component<ILogoProps, ILogoStates> {
    public render() {
        return <Icon icon={<LogoSvg style={this.props.style} />} />;
    }
}