import React, { useState } from 'react'
import UseStateArray from '../AllTabs/useState-array'
import UseStateObject from '../AllTabs/useState-object'
import UseStateBasics from '../AllTabs/useState-basics'
import ErrorExample from '../AllTabs/error-example'

import TabBtnItem from '../TabBtnItem'
import TabContent from '../TabContent'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('basics')
    return (
        <>
            <div style={{ marginTop: '-1.5rem' }}>
                <TabBtnItem title='Array' id='tab1' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabBtnItem title='Object' id='tab2' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabBtnItem title='Basics' id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabBtnItem title='Error Example' id='tab4' activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div>
                <TabContent id='tab1' activeTab={activeTab}>
                    <UseStateArray />
                </TabContent>
                <TabContent id='tab2' activeTab={activeTab}>
                    <UseStateObject />
                </TabContent>
                <TabContent id='tab3' activeTab={activeTab}>
                    <UseStateBasics />
                </TabContent>
                <TabContent id='tab4' activeTab={activeTab}>
                    <ErrorExample />
                </TabContent>

            </div>
        </>
    )
}

export default Tabs