import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { getIntlMessage } from '../langs/util';
import { Plugin } from '../src/index';
import './HomePage.scss';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
    public render() {
        return (
            <div>
                <div>
                    <Plugin.Button category={Plugin.ButtonCategoryType.Primary} type={Plugin.ButtonType.Submit} caption={<FormattedMessage id="Label.Button" />} />
                </div>
                <div>
                    <Plugin.TextBox placeholder={getIntlMessage("Label.Placeholder")} />
                </div>
                <div>
                    <Plugin.TextBox icon={<Plugin.IconUser />} />
                </div>
            </div>
        );
    }
}

export default HomePage;