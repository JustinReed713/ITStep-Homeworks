import React from 'react';
import './TabContentPanel.css';

class TabContentPanel extends React.Component {

    render() {
        const { value, activeTab } = this.props;
        return (
            <div className="tab-content-panel">
                {value[activeTab]}
            </div>
        )
    }
}

export default TabContentPanel;
