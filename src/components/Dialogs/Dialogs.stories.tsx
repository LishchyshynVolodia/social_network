import React from 'react';
import { Story, Meta } from '@storybook/react';

import {Dialogs} from "./Dialogs";

export default {
    title: 'Dialogs',
    component: Dialogs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


export const Test = ()=>{
    return"lol"
}






