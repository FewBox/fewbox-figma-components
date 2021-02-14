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
                <Base.Layout.Row textAlignType={Base.Layout.TextAlignType.Center} style={{margin: '10px 0'}}>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.Icon.Logo style={{color: '#d864a3', height: '26px'}} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Button category={Figma.UI.ButtonCategoryType.Primary} type={Figma.UI.ButtonType.Button} caption={<FormattedMessage id="Label.Button" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Button category={Figma.UI.ButtonCategoryType.OutlinePrimary} type={Figma.UI.ButtonType.Button} caption={<FormattedMessage id="Label.Button" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Button category={Figma.UI.ButtonCategoryType.LinkPrimary} type={Figma.UI.ButtonType.Button} caption={<FormattedMessage id="Label.Button" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.TextBox placeholder={this.props.intl.formatMessage({ id: "Label.Placeholder" })} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.TextArea rows={4} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.CheckBox />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Label caption={<FormattedMessage id="Label.LabelDefault" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Label category={Figma.UI.LabelCategoryType.Primary} caption={<FormattedMessage id="Label.LabelPrimary" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Label category={Figma.UI.LabelCategoryType.Secondary} caption={<FormattedMessage id="Label.LabelSecondary" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
                        <Figma.UI.Label style={{fontSize: '8px'}} caption={<FormattedMessage id="Label.LabelPrefix" />} />
                        <Figma.UI.Link style={{fontSize: '8px'}} category={Figma.UI.LinkCategoryType.Primary} caption={<FormattedMessage id="Label.LinkPrimary" />} onClick={()=>{ alert('Goto'); }} />
                        <Figma.UI.Label style={{fontSize: '8px'}} caption={<FormattedMessage id="Label.LabelSuffix" />} />
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                </Base.Layout.Row>
                <Base.Layout.Row>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={4}></Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Small} columnCount={3}>
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