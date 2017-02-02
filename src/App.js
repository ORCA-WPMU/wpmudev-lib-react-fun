import React, { Component } from 'react';
import './App.css';
import DevBox from './components/DevBox';
import Button from './components/Button';
import LinkButton from './components/LinkButton';
import Selector from './components/Selector';
import DevList from './components/DevList/DevList';
import Tabs from './components/Tabs/Tabs';


class App extends Component {
    render() {

        const rows = [
            {
                label: 'text/html',
                detail: <Button>Enabled</Button>
            },
            {
                label: 'text/html',
                detail: <Button>Enabled</Button>
            }
        ];

        const tabs = [
            {
                title: 'title1',
                content: 'AAA'
            },
            {
                title: 'title2',
                content: 'BBB'
            }
        ];

        const headers = {
            label: 'Compression Type',
            detail: 'Status'
        };

        return (
            <div id="App" className="wpmud-html">
                <div className="wpmud">
                    <div id="wpbody">
                        <div id="container">
                            <h1>Kitchen Sink</h1>

                            <div className="section">
                                <DevBox
                                    title="This is a common box"
                                    header="Things in the header"
                                    footer="This is the footer"
                                >
                                    <DevList
                                        rows={rows}
                                        headers={headers}
                                    />
                                </DevBox>
                            </div>

                            <div className="section">
                                <Selector
                                    options={
                                        [
                                            { label: 'Deactivate completely', value: 'deactivate' },
                                            { label: 'Blog Admins can minify', value: 'admins' },
                                            { label: 'Only Super Admins can minify', value: 'superadmins' }
                                        ]
                                    }
                                    selected="deactivate"
                                    handleSelect={( value ) => alert( value )}
                                />
                            </div>

                            <div className="section">
                                <Button>A standard button</Button>
                                <Button type="green">Green button</Button>
                                <Button type="secondary">Secondary button</Button>
                                <Button type="red">Red button</Button>
                                <Button type="grey">Grey button</Button>
                                <Button type="yellow">Yellow button</Button>
                                <Button type="light">Light button</Button>
                                <Button type="deactivated">Deactivated button</Button>
                                <Button type="text">Text button</Button>
                                <Button size="big">Big button</Button>
                                <Button size="small">Small button</Button>
                                <Button shadow={true}>Shadow button</Button>
                                <LinkButton shadow={true}>This is a link button</LinkButton>
                            </div>

                            <div className="section">
                                <Tabs
                                    tabs={tabs}
                                    active={1}
                                />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
