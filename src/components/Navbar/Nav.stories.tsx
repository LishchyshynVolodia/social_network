import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Nav} from "./Nav";


export default {
    title: 'Nav',
    component: Nav,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;
 export const lol = ()=>Nav


