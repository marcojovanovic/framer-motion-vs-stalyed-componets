import styled from 'styled-components' 
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`

   min-height:90vh;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:2rem;
   color:white;

`

export const Image = styled.div`

  flex:1;
  overflow:hidden;

  img{
    width:100%;
    height:80vh;
    object-fit:cover;
  }

`
export const Description = styled.div`

  flex:1;
  padding-right:5rem;
  h2{
    font-weight:lighter;
  }
`