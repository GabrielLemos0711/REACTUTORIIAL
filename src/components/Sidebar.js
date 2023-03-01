import './Sidebar.css'
import Box from '@mui/material/Box'

const Sidebar = () => {
    return (
        <Box className='Sidebar' sx={{
            backgroundColor: 'brown',
            minWidth: 600,
            height: 500
            
        }}>
            <h2>Sidebar</h2>
        </Box>
    )
}

export default Sidebar