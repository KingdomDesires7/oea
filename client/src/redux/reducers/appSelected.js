// So there will be 1 + 19 cases here...

const appSelected = (state = 'nothingHere', action) => {
    switch(action.type) {
        case 'HOME':
            return 'HOME'
        case 'HEALTH':
            return 'HEALTH'
        default:
            return state;
    }
}

export default appSelected;