import React from 'react';
import TabButtonPanel from '../tab-button-panel/TabButtonPanel.js';
import TabContentPanel from '../tab-content-panel/TabContentPanel.js';
import './TabBox.css';

class TabBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    setActiveTab = (value) => {
        this.setState({ activeTab: value })
    }

    render() {
        const { tabButtonArray, buttonPrefix, contentArray } = this.props;
        const { activeTab } = this.state;
        return (
            <div className="tab-box-container">
                <TabButtonPanel array={tabButtonArray} keyPrefix={buttonPrefix} setHandler={this.setActiveTab} activeTab={activeTab} />
                <TabContentPanel activeTab={activeTab} value={contentArray} />
            </div>
        )
    }
}

export default TabBox;
