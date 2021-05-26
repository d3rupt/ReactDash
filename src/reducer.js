export const initialState = {
   isDay: true,
    wallpaper: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_DAYTIME':
            return {
                ...state,
                isDayGlobal: action.isDayGlobal
            };

        case 'SET_WALLPAPER':
            return {
                ...state,
                wallpaper: action.wallpaper
            };
        default:
            return state;
    }
}

export default reducer
