import React from 'react'
import { observer } from 'mobx-react'
import './index.less'
import store from '../../store'

function Cake() {

    const reset = () => {
        document.querySelector('.failed')?.classList.remove('failed')
        document.querySelector('.congratulations')?.remove()
        store.reset()
    }

    return <>
        {store.start && !store.travelFailed && !store.arrive && <div className='cake' onClick={() => store.addEnergy()}></div>}
        {(store.travelFailed || store.arrive) && <div className='btn reset' onClick={reset}>重新登月</div>}
    </>
}

export default observer(Cake)
