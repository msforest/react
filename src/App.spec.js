// import { mount } from "enzyme";
import React from 'react'
import App from "./App";
import { FormattedDate, FormattedMessage } from "react-intl";

it('test', () => {
    const wrapper = mountWithIntl(<App importantDate={new Date(1459913574887)} />)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find(<FormattedMessage />)).toHaveLength(1)
})