export const themeSettings = (mode)=>{
    return {
        palette: {
            mode: mode,
            primary: {
              main: '#e63946',
              
             
            
            },

            customBackground: {
              default: 'linear-gradient(120deg, #e63946 0%, #E27221 100%)',
              secondary: 'linear-gradient(180deg, #e63946 0%, #E27221 100%)',
            },
          
            secondary: {
              main: '#1d3557',
            },
            error: {
              main: '#e01d7e',
            },
            success: {
              main: '#1de01d',
            },
            dark:{
              main: '#000000',
            }
          },
    }
}