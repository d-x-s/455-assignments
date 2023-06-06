const initialState = {
    items: [
        {
            "key": '1',
            "name": "Card 1",
            "description": "Happy",
            "price": "10",
            "imageUrl": "https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/happy-peepo-david-l-deri-transparent.png?&targetx=148&targety=44&imagewidth=403&imageheight=412&modelwidth=700&modelheight=500&backgroundcolor=ffffff&orientation=0"
        },
        {   "key": '2',
            "name": "Card 2",
            "description": "Smug",
            "price": "20",
            "imageUrl": "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F000%2F861%2F554%2F307.jpg"
        },
        {
            "key": '3',
            "name": "Card 3",
            "description": "Sad",
            "price": "30",
            "imageUrl": "https://freepngimg.com/save/98388-the-pepe-frog-png-free-photo/654x527"
        },
        {
            "key": '4',
            "name": "Card 4",
            "description": "Clown",
            "price": "40",
            "imageUrl": "https://images.fineartamerica.com/images/artworkimages/medium/3/pepe-the-clown-jenna-joane-transparent.png"
        }
    ]
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state, // spread and preserve other properties
                items: [...state.items, action.payload]
            }
        case 'DELETE_ITEM':
            const updatedItems = state.items.filter((item) => item.name !== action.itemName);
            return {
                ...state,
                items: updatedItems,
            };
        default:
            return state;
    }
};

export default formReducer;