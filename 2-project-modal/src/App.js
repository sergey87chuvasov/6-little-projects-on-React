import React from 'react';
import './index.scss';

/// III PART

// const Modal = ({ open, setOpen}) => (
//   <div className={`overlay animated ${open ? 'show' : ''}`}>
//     <div className='modal'>
//       <svg
//         onClick={() => setOpen(false)}
//         height='200'
//         viewBox='0 0 200 200'
//         width='200'
//       >
//         <title />
//         <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
//       </svg>
//       <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
//     </div>
//   </div>
// );

// IV PART

const Modal = ({ open, setOpen, children }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className='modal'>
      <svg
        onClick={() => setOpen(false)}
        height='200'
        viewBox='0 0 200 200'
        width='200'
      >
        <title />
        <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
      </svg>
      {children}
    </div>
  </div>
);

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    // I PART

    // <div className='App'>
    //   <button onClick={() => setOpen(true)} className='open-modal-btn'>
    //     ✨ Открыть окно
    //   </button>

    //   {/* if open true => render  --условный рендер */}

    //   {open && (
    //     <div className='overlay'>
    //       <div className='modal'>
    //         <svg
    //           onClick={() => setOpen(false)}
    //           height='200'
    //           viewBox='0 0 200 200'
    //           width='200'
    //         >
    //           <title />
    //           <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
    //         </svg>
    //         <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
    //       </div>
    //     </div>
    //   )}
    // </div>

    // II PART

    // <div className='App'>
    //   <button onClick={() => setOpen(true)} className='open-modal-btn'>
    //     ✨ Открыть окно
    //   </button>
    //   <div className={`overlay animated ${open ? 'show' : ''}`}>
    //     <div className='modal'>
    //       <svg
    //         onClick={() => setOpen(false)}
    //         height='200'
    //         viewBox='0 0 200 200'
    //         width='200'
    //       >
    //         <title />
    //         <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
    //       </svg>
    //       <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
    //     </div>
    //   </div>
    // </div>

    // III PART

    // <div className='App'>
    //   <button onClick={() => setOpen(true)} className='open-modal-btn'>
    //     ✨ Открыть окно
    //   </button>

    //   {/* without anim */}
    //   {/* {open && <Modal open={open} setOpen={setOpen} />} */}

    //   {/* // with anim */}
    //   {<Modal open={open} setOpen={setOpen} />}
    // </div>

    // IV PART WITH CONTENT !!! add children

    <div className='App'>
      <button onClick={() => setOpen(true)} className='open-modal-btn'>
        ✨ Открыть окно
      </button>

      {/* without anim */}
      {/* {open && <Modal open={open} setOpen={setOpen} />} */}

      {/* // with anim */}
      <Modal open={open} setOpen={setOpen}>
        <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
        <h3>This is test message</h3>
        <button>Click Me Pls</button>
      </Modal>
    </div>
  );
}

export default App;
