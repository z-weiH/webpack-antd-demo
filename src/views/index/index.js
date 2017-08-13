import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button
} from 'antd';

class App extends React.Component {
    click() {
        alert(222);
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.click}>按钮222</Button>
            </div>
        );
    }
}
ReactDOM.render(< App />, document.getElementById('root'));