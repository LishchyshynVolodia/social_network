import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Profile} from "./Profile";


export default {
    title: 'Profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



