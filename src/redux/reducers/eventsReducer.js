const initialState = {
    events: [{
        id: "EVENT_1",
        month: "DEC",
        base_locatio: "United Kingdom",
        council_Name: "Outreach UK",
        beneficiary_Name: "ST.Edwards",
        date: "12 Dec 2020",
        event_Name: "Christmas fair to save a swimming pool",
        event_description: "The school is hosting a christmas to raise money to refurnish their swimming pool for the childrens who can swim in their swimming pool",
        event_status: "Approved",
        event_category: "Other Cimmunity Program",
        event_feedback: 4,
        event_averageRating: 4,
        event_participated: [{
            Rating: 5,
            Likes: "nice",
            DisLike: "travel"
        },
        {
            Rating: 3,
            Likes: "swimming",
            DisLike: "snacks can be provided"
        }],
        statistics: {
            averageRatings: 4,
            volunteres: 4,
            volunterring_hours: 24,
            overall_Hours: 24,
            travel_hours: 10,
            lives_impacted: 0
        },
        poc_Details: [
            {
                employee_id: 563546,
                employee_Name: "Neeli",
                employee_contactNumber: 8974364757
            }
        ]
    }, {
        id: "EVENT_2",
        month: "JAN",
        base_locatio: "Singapore",
        council_Name: "Outreach Singapore",
        beneficiary_Name: "Lion",
        date: "12 Dec 2020",
        event_Name: "Sinapore Science Exhibition",
        event_description: "The science exhibition occuring in Singapore is famous in world.The scientific expo is organized by Stark",
        event_status: "Approved",
        event_category: "Stark Community",
        event_feedback: 4,
        event_averageRating: 4,
        event_participated: [{
            Rating: 5,
            Likes: "nice",
            DisLike: "travel"
        },
        {
            Rating: 3,
            Likes: "robos",
            DisLike: "dances"
        }],
        statistics: {
            averageRatings: 4,
            volunteres: 4,
            volunterring_hours: 24,
            overall_Hours: 24,
            travel_hours: 10,
            lives_impacted: 0
        },
        poc_Details: [
            {
                employee_id: 563546,
                employee_Name: "Tony",
                employee_contactNumber: 8725452645
            }
        ]
    }]
}

const eventsReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'Total_Events':
            {
            var totalEvents = action.total;
            state = totalEvents
            return state
        }
        default:
            return state
    }
}

export default eventsReducer