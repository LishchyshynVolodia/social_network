import React from 'react';
import { Story, Meta } from '@storybook/react';
import {MyPosts} from "./MyPosts";


export default {
    title: 'Nav',
    component: MyPosts,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;




