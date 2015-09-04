


import React, { Component } from 'react';

import Button from 'components/buttons/basic.jsx';


export default class App extends Component {

    render() {
        return (
            <div>
                <br/>
                <div>
                    <Button icon='icon-add-comment'>Add comment</Button>
                    <Button type='link_delete'>delete</Button>
                    <Button type='link' icon='icon-home'>Normal</Button>
                    <Button icon='icon-home' size='small'>Small</Button>
                    <Button icon='icon-home' size='smallest' >Smallest</Button>
                </div>
                <br/>
                <div>
                    <Button icon='icon-home' size='largest'></Button>
                    <Button icon='icon-home' size='large'></Button>
                    <Button icon='icon-home'></Button>
                    <Button icon='icon-home' size='small'></Button>
                    <Button icon='icon-home' size='smallest' ></Button>
                </div>
                <br />
                <div>
                    <Button icon='icon-home' size='largest'>Largest</Button>
                    <Button icon='icon-home' size='large'>Large</Button>
                    <Button type='link' icon='icon-home'>Normal</Button>
                    <Button icon='icon-home' size='small'>Small</Button>
                    <Button icon='icon-home' size='smallest' >Smallest</Button>
                </div>
                <br />
                <div>
                    <Button icon='icon-home' size='largest' disabled>Largest</Button>
                    <Button icon='icon-home' size='large' disabled>Large</Button>
                    <Button icon='icon-home' disabled>Normal</Button>
                    <Button icon='icon-home' size='small' disabled>Small</Button>
                    <Button icon='icon-home' size='smallest' disabled>Smallest</Button>
                </div>
            </div>
        )
    }
};