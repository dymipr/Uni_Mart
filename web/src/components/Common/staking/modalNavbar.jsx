import { useState } from 'react'
import Modal from './modal'

const ModalNavbar = () => {
  const [modalState, setModalState] = useState(false)

  return (
    <div className="flex">
      <div className="m-5 text-[white]" onClick={() => setModalState(true)}>
        open modal
      </div>
      <div>
      {/* <Modal setModalState={setModalState} /> */}
        { modalState && <Modal setModalState={setModalState} /> }
      </div>
    </div>
  )
}

export default ModalNavbar