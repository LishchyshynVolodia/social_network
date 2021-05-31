import React from 'react';
import { Story, Meta } from '@storybook/react';

import {ProfileInfo} from "./ProfileInfo";


export default {
    title: 'ProfileInfo',
    component: ProfileInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



