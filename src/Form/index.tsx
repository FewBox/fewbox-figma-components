import React from "react";
import { autobind } from 'core-decorators';

export interface IFormProps {
    handleSubmit: (json) => void;
}

export interface IFormStates {
}

export default class Form extends React.Component<IFormProps, IFormStates> {
    @autobind
    handleSubmit(event) {
        event.preventDefault();
        var json = {};
        const data = new FormData(event.target);
        data.forEach((value, key) => {
            var segments = key.split('.');
            let parent = json;
            segments.forEach((segment, segmentIndex) => {
                if (segmentIndex == segments.length - 1) {
                    parent[segment] = value;
                }
                else {
                    if (!(segment in parent)) {
                        parent[segment] = {};
                    }
                    parent = parent[segment];
                }
            });
        });
        this.props.handleSubmit(json);
    }
    public render() {
        return <form className="fb-form" onSubmit={this.handleSubmit}> {this.props.children}</ form>;
    }
}