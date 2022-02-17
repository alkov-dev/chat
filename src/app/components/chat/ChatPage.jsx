import React from 'react';
import styles from './ChatPage.module.css'
import {useGetMessagesQuery} from '../../RTK'


const ChatPage = () => {
    	
    const chatBody = React.useRef(null);
    const chatNumber = React.useRef(null);
    const [limit, setLimit] = React.useState(50);
    const {data, isLoading, error} = useGetMessagesQuery(limit)

    React.useEffect(() => {
      let observerRef = new IntersectionObserver((entry) => { 
         if(entry[0].isIntersecting) {
            setLimit(limit+10)
         }
      })
      observerRef.observe(chatNumber.current)
   }, [])

   React.useEffect(() => {
    if(isLoading) {
       chatBody.current.scrollTop = chatBody.current.clientHeigth
    }
    }, [isLoading])



      
    return (
        <div>
            <div className={styles.chat__block}  ref={chatBody}>
                <div ref={chatNumber}>
                    {data && data.map(elem => 
                       <div key={elem.id} className={styles.chat__item}>{elem.text}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatPage;