import React from 'react'
import { observer } from 'mobx-react'
import './index.less'
import Moon from '../moon'
import store from '../../store'
function Scene() {
    return <div className='scene'>
        <Moon />
        {!store.start && <div className='btn reset' onClick={() => store.startTravel()}>开始登月</div>}
    </div>
}

export default observer(Scene)
