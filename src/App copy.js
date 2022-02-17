import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './app/redux/actions/ActionsRedusers'
import {setAddNewMassage,setIsShowChat, setLanguage, setMenuItem, setSkipAndLimit} from './app/redux/actions/ActionsRedusers'
import {useGetMessagesQuery} from './app/RTK'
import './App.css'


function App() {
  const dispatch = useDispatch()
  const [photos, setPhotos] = React.useState([])
  const [limit, setLimit] = React.useState(20);

  React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
        .then(response => setPhotos(response.data) )
        console.log(limit);
  },[limit])


  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    // return function() { document.removeEventListener('scroll', handleScroll)  }
  },[])

  const handleScroll = (event) => {
    let scrollBottom = event.target.documentElement.scrollHeight - event.target.documentElement.scrollTop - event.target.documentElement.clientHeight;
    console.log('scrollBottom', scrollBottom);
    if (scrollBottom === 0 ) { 
      setLimit((limit) => limit+ 10) 
    } 
  }


  // const handeleNewMassage = () => {
  //   dispatch(setAddNewMassage({id: '013bc94e', from: 'chat_bot', text: '!!!!!', createdAt: '2022-02-15T15:26:39.022Z'}))
  // }

  // console.log(photos);

  return (
    <div>
      <div>
        {photos && photos.map((el, index) => 

          <div>
            <p>{el.name}</p>
          </div>

        )}
        <button >add</button>
      </div>
     </div>
  );
}

export default App;
