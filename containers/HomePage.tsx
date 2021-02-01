import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { getIntlMessage } from '../langs/util';
import { Figma } from '../src/index';
import './HomePage.scss';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
    handleSubmit(json) {
        console.log(json);
    }
    public render() {
        return (
            <div>
                <div>
                    <Figma.UI.Button category={Figma.UI.ButtonCategoryType.Primary} type={Figma.UI.ButtonType.Button} caption={<FormattedMessage id="Label.Button" />} />
                </div>
                <div>
                    <Figma.UI.TextBox placeholder={getIntlMessage("Label.Placeholder")} />
                </div>
                <div>
                    <Figma.UI.TextArea rows={2} />
                </div>
                <div>
                    <Figma.UI.CheckBox />
                </div>
                <div>
                    <Figma.UI.Form handleSubmit={this.handleSubmit}>
                        <Figma.UI.TextBox icon={<Figma.Icon.User />} name="user.name" />
                        <Figma.UI.Password icon={<Figma.Icon.Lock />} name="user.password" />
                        <Figma.UI.Select icon={<Figma.Icon.Group />} name="user.group.name" options={
                            [
                                { name: getIntlMessage("Label.Option1Name"), value: 1 },
                                { name: getIntlMessage("Label.Option2Name"), value: 2 }
                            ]
                        } />
                        <Figma.UI.Submit />
                    </Figma.UI.Form>
                </div>
            </div>
        );
    }
}

export default HomePage;