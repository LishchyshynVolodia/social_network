import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Post} from "./Post";


export default {
    title: 'Post',
    component: Post,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;



