import React from 'react';
import TabButton from '../tab-button/TabButton.js';
import './TabButtonPanel.css'

class TabButtonPanel extends React.Component {

    render() {
        const { setHandler, array, keyPrefix, activeTab } = this.props;
        return (
            <div className="tab-button-panel">
                {array.map((item, index) => (
                    <TabButton
                        isActive={index === activeTab ? (true) : (false)}
                        caption={item}
                        number={index}
                        key={`${keyPrefix}button${index}`}
                        handler={setHandler}
                    />
                ))}
            </div>
        )
    }
}

export default TabButtonPanel;
