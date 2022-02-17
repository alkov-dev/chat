import { createSlice } from "@reduxjs/toolkit";
// import { langItems, menuItems } from "./const.ts";
// import { IParams } from "./models.ts";


const initialState = {
  // id: 2323,
  // from: 'chat_bot', 
  // text: '!!!', 
  // createdAt: '455',
  isShowChat: true,
  language: 0,
  menu: 0,
  step: 5,
};

export const params = createSlice({
  name: "params",
  initialState,
  reducers: {
    setAddNewMassage: (state, { payload }) => {
      state.id = payload.id
      state.from =  payload.from
      state.text = payload.text
      state.createdAt = payload.createdAt
    },
    setIsShowChat: (state, { payload }) => {
      state.isShowChat = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setMenuItem: (state, { payload }) => {
      state.menu = payload;
    },
  },
});

export const { setAddNewMassage,setIsShowChat, setLanguage, setMenuItem, setSkipAndLimit } = params.actions;
export default params.reducer
