import {
    observable,
    makeAutoObservable,
    action
} from 'mobx'

class AppStore {
    private moonOffset = 150 // 月亮的边距
    private goddessRight = 150 // 仙女默认距右边距
    private goddessTop = 100 // 仙女默认距右边距
    private moveSize = 20

    private travelTimmer: any
    private travalSpeed = 200

    @observable energy = 30 // 能量值
    @observable start = false // 是否开始登录： 没有登录显示登录按钮； 开始登录之后开始计算能量值
    @observable arrive = false // 是否抵达
    @observable travelFailed = false // 登月失败

    @observable goddessPosition = {
        left: window.innerWidth - this.moonOffset - this.goddessRight,
        top: window.innerHeight - this.moonOffset - this.goddessTop
    }

    constructor() {
        makeAutoObservable(this)
    }

    private travel() {
        if (this.travelTimmer) {
            return
        }

        this.travelTimmer = setInterval(() => {
            const left = this.goddessPosition.left - this.moveSize
            const top = this.goddessPosition.top - this.moveSize * (this.goddessPosition.top / this.goddessPosition.left)

            const value = this.energy - 1
            this.energy = value <= 0 ? 0 : value

            // 能量不足，死掉
            if (this.energy <= 0) {
                this.travelFailed = true
                clearInterval(this.travelTimmer)
                return
            }

            // 到达目的就停止
            if ((left || top) <= this.moonOffset) {
                this.arrive = true;
                clearInterval(this.travelTimmer)
                return
            }
            this.goddessPosition = {
                left, top
            }
        }, this.travalSpeed)
    }

    @action addEnergy() {
        const value = this.energy + 3
        this.energy = value >= 100 ? 100 : value
    }

    @action startTravel() {
        this.start = true

        this.travel()
    }

    @action reset() {
        this.travelTimmer = null
        this.energy = 50
        this.arrive = false

        this.goddessPosition = {
            left: window.innerWidth - this.moonOffset - this.goddessRight,
            top: window.innerHeight - this.moonOffset - this.goddessTop
        }

        this.travelFailed = false
        
        this.startTravel()
    }
}

const store = new AppStore()
export default store
