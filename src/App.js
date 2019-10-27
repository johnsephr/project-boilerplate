import React, { Fragment } from 'react'

// Components
import Header from './components/Header/Header'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Loader from './components/Utility/Loader/Loader'
import ButtonModal from './components/Utility/Modal/Modal'

//MUI
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto'
  },
  grid: {
    padding: 15
  }
}))

const App = props => {
  const classes = useStyles(props)
  return (
    <Fragment>
      <Header />
      <Grid
        container
        direction='row'
        alignContent='center'
        spacing={1}
        className={classes.grid}
      >
        <Grid item xs={6}>
          <ThemeToggle />
        </Grid>

        <Grid item xs={12}>
          <Loader />
        </Grid>

        <Grid item xs={12}>
          <ButtonModal />
        </Grid>

      </Grid>
    </Fragment>
  )
}

export default App
