import * as React from 'react';
import { Base } from '@fewbox/react-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Figma } from '../src/index';
import './HomePage.scss';
import langs from '../langs';
import settings from '../settings';

export interface IHomePageProps {
    intl: any;
}

class HomePage extends React.Component<IHomePageProps, any> {
    handleSubmit(json) {
        console.log(json);
    }
    public render() {
        let options = {
            getToken: () => {
                return "My Token";
            },
            getAppSettings: () => {
                return settings;
            },
            getLanguages: () => {
                return langs;
            },
            showErrorMessage: (message: string) => {
                alert(message);
            }
        };
        return (
            <div className="homePage">
                <Base.Boot.FewBox options={options} />
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={8}>
                        <Figma.UI.Button category={Figma.UI.ButtonCategoryType.Primary} type={Figma.UI.ButtonType.Button} caption={<FormattedMessage id="Label.Button" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={8}>
                        <Figma.UI.TextBox placeholder={this.props.intl.formatMessage({ id: "Label.Placeholder" })} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={8}>
                        <Figma.UI.TextArea rows={2} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={8}>
                        <Figma.UI.CheckBox />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={2}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}>
                        <Figma.UI.Form handleSubmit={this.handleSubmit}>
                            <Figma.UI.TextBox icon={<Figma.Icon.User />} name="user.name" />
                            <Figma.UI.Password icon={<Figma.Icon.Lock />} name="user.password" />
                            <Figma.UI.Select icon={<Figma.Icon.Group />} name="user.group.name" options={
                                [
                                    { name: this.props.intl.formatMessage({ id: "Label.Option1Name" }), value: 1 },
                                    { name: this.props.intl.formatMessage({ id: "Label.Option2Name" }), value: 2 }
                                ]
                            } />
                            <Figma.UI.Submit />
                        </Figma.UI.Form>
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
            </div>
        );
    }
}

export default injectIntl(HomePage);