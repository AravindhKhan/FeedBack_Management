const initialState = {
    messageList:[
        {
            text:"HI",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"how can I help you",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"I need to see a watch",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"oh ok let me share the images",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"ok",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"oh ok let me share the images",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"ok",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"oh ok let me share the images",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"ok",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"oh ok let me share the images",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"ok",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"oh ok let me share the images",
            type:"incoming",
            time: new Date().toLocaleTimeString()
        },
        {
            text:"ok",
            type:"outgoing",
            time: new Date().toLocaleTimeString()
        }
    ]
}
const chatbotReducer = (state = initialState,action)=>{
  switch(action.type){
      case 'get':{
          return state
      }
      case 'SEND_MESSAGE':{
          var messageList = [...state.messageList];
          var length = messageList.length;
          messageList[length] = {
              text: action.data,
              type:"outgoing",
              time: new Date().toLocaleTimeString()
          }
          state.messageList = messageList;
        //   console.log("in reducer ",state)
          return {...state,messageList}
      }
      case 'EDIT_MESSAGE':{
          console.log("in reducer ",action.data);
          return state
      }
      default:
          return state
  }
}
export default chatbotReducer