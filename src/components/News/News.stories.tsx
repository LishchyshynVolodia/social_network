import React from 'react';
import { Story, Meta } from '@storybook/react';
import {News} from "./News";


export default {
    title: 'News',
    component: News,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



