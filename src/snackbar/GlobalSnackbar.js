// https://maku.blog/p/jbv7gox/

import * as React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

/** スナックバーの表示をカスタマイズ */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} sx={{ width: '100%' }}/>
})

/** スナックバーを表示するコンポーネント */
export const GlobalSnackbar = ({
  open, message, severity = 'info', onClose
}) => {
  return (
    <Snackbar open={open} onClose={onClose} autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  )
}