import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/redux/actions/ActionsRedusers'
import {setAddNewMassage,setIsShowChat, setLanguage, setMenuItem, setSkipAndLimit} from './app/redux/actions/ActionsRedusers'
import ChatPage from './app/components/chat/ChatPage'
import './app.css'


function App() {
  const dispatch = useDispatch()


  const handeleNewMassage = () => {
    dispatch(setAddNewMassage({id: '013bc94e', from: 'chat_bot', text: '!!!!!', createdAt: '2022-02-15T15:26:39.022Z'}))
  }

  return (
    <div className='container'>
      <ChatPage/>
      <button onClick={handeleNewMassage}>add</button>
    </div>
  );
}

export default App;
