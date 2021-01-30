  
import { createIntlCache, createIntl } from 'react-intl';
import langs from '../langs';

const cache = createIntlCache();

export const getIntlMessage = (intlId: string, values?: any): string => {
    const messages = langs('en-us');
    const intl = createIntl(
        {
            locale: 'en',
            messages: messages,
        },
        cache,
    );
    return intl.formatMessage({ id: intlId }, values);
};