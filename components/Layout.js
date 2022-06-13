import React from 'react';
import Head from "next/head";
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core';

// styles
import useStyles from '../utils/style';

export default function ({children}) {
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>Next Amazona</title>
        </Head>
        <AppBar position='static' className={classes.navBar}>
            <Toolbar>
                <Typography>amazona</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>All rights reserved. Next Amazona.</Typography>
        </footer>
    </div>
  )
}
