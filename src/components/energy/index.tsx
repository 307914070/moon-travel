import React from 'react'
import { observer } from 'mobx-react'
import './index.less'
import store from '../../store'

function Energy() {
    return <>
        {store.start && !store.arrive && <div className='energy'>
            <div className='percent' data-text={`登月能量值${store.energy}%`} style={{ width: `${store.energy}%` }}></div>
        </div>}
    </>
}

export default observer(Energy)
