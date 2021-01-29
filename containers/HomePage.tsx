import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Plugin } from '../src/index';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
    public render() {
        return (
            <div>
                <Plugin.Button category={Plugin.CategoryType.Primary} type={Plugin.ButtonType.Submit} caption={<FormattedMessage id="Label.Button" />} />
            </div>
        );
    }
}

export default HomePage;