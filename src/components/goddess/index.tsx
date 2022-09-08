import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.less'
import store from '../../store'
import change from '../../assets/change.jpeg'

function Goddess() {
    return <>
        {!store.travelFailed && <div className='goddess' style={{ ...store.goddessPosition }}>
        <img src={change}/>
    </div>}
    </>
}

export default observer(Goddess)
