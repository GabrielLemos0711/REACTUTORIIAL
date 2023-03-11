import Box from '@mui/material/Box'
import Alert from './Alert'



const Content = () => {
    return (
        <Box sx={{
            background: "#EEE",
            width: 500,
            height: 500,
            padding: '15px'
        }}>
            <h2>Content</h2>

            <Alert type="success" >
                Deu certo!
            </Alert>

            <Alert type="error">
               Deu Erro!
            </Alert>

            <Alert type="info">
                Info!
            </Alert>

            <Alert type="warning">
               Warning!
            </Alert>   
          </Box>
    )
}

export default Content