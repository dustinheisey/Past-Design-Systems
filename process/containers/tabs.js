/* tabs, tab, tab-panel */

import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Plan from './Plan'

const StyledTabs = styled(Tabs)``
const StyledTab = styled(Tab)`
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  &:focus:after {
    content: '';
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }
`
const StyledTabList = styled(TabList)`
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
`
const StyledTabPanel = styled(TabPanel)`
  display: none;
`

export default () => (
  <StyledTabs>
    <StyledTabList>
      <StyledTab>Monthly</StyledTab>
      <StyledTab>Yearly</StyledTab>
    </StyledTabList>

    <StyledTabPanel>
      <Plan
        caption='Begginer'
        price='$20'
        frequency='/ Month'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Personal'
        price='$29'
        frequency='/ Month'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Unlimited'
        price='$79'
        frequency='/ Month'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
    </StyledTabPanel>
    <StyledTabPanel>
      <Plan
        caption='Begginer'
        price='$200'
        frequency='/ Year'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Personal'
        price='$290'
        frequency='/ Year'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
      <Plan
        caption='Unlimited'
        price='$790'
        frequency='/ Year'
        BtnLink='/'
        BtnText='Plan'
      >
        <p>
          Sed accusam sanctus ea amet dolor et, at eos clita
          sed dolores ipsum dolor diam est at, sea dolores
          sea aliquyam invidunt lorem invidunt stet et,
          dolores et rebum erat.
        </p>
      </Plan>
    </StyledTabPanel>
  </StyledTabs>
)

import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center">
        <button
          className={`mr-4 py-2 px-4 font-medium ${
            activeTab === 0 ? 'text-blue-500' : 'text-gray-400'
          }`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </button>
        <button
          className={`mr-4 py-2 px-4 font-medium ${
            activeTab === 1 ? 'text-blue-500' : 'text-gray-400'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 2 ? 'text-blue-500' : 'text-gray-400'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 0 && <p>Tab 1 content goes here</p>}
        {activeTab === 1 && <p>Tab 2 content goes here</p>}
        {activeTab === 2 && <p>Tab 3 content goes here</p>}
      </div>
    </div>
  );
};