import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
       <div className="messageInfo">
        <img src="https://media.licdn.com/dms/image/C4E03AQFG784sIRyt3w/profile-displayphoto-shrink_100_100/0/1663947138226?e=1686182400&v=beta&t=sJMDRtQ2gfJ2ZzUhRU0K4IAHljZyKix_WEoNOgZ0RE0" alt="" />
         <span>just now</span>
       </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://betches.s3.amazonaws.com/app/uploads/2019/08/23135433/ezoo.jpg" alt="" />
      </div>
     
    </div>
  )
}

export default Message


// import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

// const Message = ({ message }) => {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div
//       ref={ref}
//       className={`message ${message.senderId === currentUser.uid && "owner"}`}
//     >
//       <div className="messageInfo">
//         <img
//           src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           }
//           alt=""
//         />
//         <span>just now</span>
//       </div>
//       <div className="messageContent">
//         <p>{message.text}</p>
//         {message.img && <img src={message.img} alt="" />}
//       </div>
//     </div>
//   );
// };

// export default Message;