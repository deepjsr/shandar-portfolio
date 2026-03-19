import { motion } from 'framer-motion'
import React from 'react'

function Notifications() {
  return (
    <div className="flex flex-shrink-0 gradiant-container">
      <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} class="text-2xl">Upcoming… <b>More animations</b> Resource section <b>All resources used</b> &nbsp;  •
        &nbsp; <span>Keep Tuning for latest updates...</span>
      </motion.div>

    </div >
  )
}

export default Notifications