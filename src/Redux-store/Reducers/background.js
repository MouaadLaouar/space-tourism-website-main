export const background = (state = 'Home', action) => {
    switch (action.type) {
        case 'Home':
            return state = 'Home';
        case 'Destination':
            return state = 'Destination';
        case 'Crew':
            return state = 'Crew';
        case 'Technology':
            return state = 'Technology';
    
        default:
            return state;
    }
}

