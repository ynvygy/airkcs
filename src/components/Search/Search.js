import * as React from 'react';

export default function SearchBox() {

    function handleSearchAction() {

    }

    return (
        <Paper
            className="searchInputBox"
            component="form"
            sx={{display: 'flex', alignItems: 'center'}}
        >
            <Grid container>
                <Grid item xs={4}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Destinations, museums, tours..."
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Destinations, museums, tours..."
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Destinations, museums, tours..."
                            inputProps={{'aria-label': 'Destinations, museums, tours...'}}
                        />
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Button variant="contained" className="searchButton"
                                onClick={handleSearchAction}>Search</Button>
                    </Item>
                </Grid>
            </Grid>

        </Paper>
    );
}