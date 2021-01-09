import React from 'react'
import { createIntl, intlShape, createIntlCache, IntlProvider } from 'react-intl';
import locales from './src/locales'

import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const cache = createIntlCache()
const intl = createIntl(
  {
    locale: 'en',
    messages: locales.zh
  },
  cache
);
// const { intl } = intlProvider.getChildContext();

// intl prop is required when using injectIntl HOC
const nodeWithIntlProp = node => React.cloneElement(node, { intl });

// shallow() with React Intl context
global.shallowWithIntl = (node, { context, ...options } = {}) => {
  return shallow(nodeWithIntlProp(node), {
    ...options,
    context: {
      ...context,
      intl
    }
  });
};

// mount() with React Intl context
global.mountWithIntl = (node) => {
    return mount(node, {
        wrappingComponent: IntlProvider,
        wrappingComponentProps: {
          locale: 'en',
          defaultLocale: 'en',
          messages: locales.en,
        },
      })
};
