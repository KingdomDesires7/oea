// So there will be 1 + 19 cases here...

const appSelected = (state = 'HOME', action) => {
    switch(action.type) {
        case 'HOME':
            return 'HOME'
        case 'UDOC':
            return 'UDOC'
        case 'UHEALTHINFO':
            return 'UHEALTHINFO'
        case 'UHEALTH':
            return 'UHEALTH'
        default:
            return state;
    }
}

export default appSelected;