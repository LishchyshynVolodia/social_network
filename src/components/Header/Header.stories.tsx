import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Header} from "./Header";


export default {
    title: 'Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



