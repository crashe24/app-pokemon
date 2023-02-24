
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

import React from 'react';

export const NavBar = () => {

  const {theme}  = useTheme()  
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: theme?.colors.black.value
    }}>

            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt='icono'
                width={70}
                height={70}
            />
           <NextLink href='/' style={{display:'flex'}}> 
                <Text color='white' h2>P</Text> 
                <Text color='white' h3>okemon</Text> 
              
           </NextLink>            
           <Spacer css={{flex:1}} />
           <NextLink href='/favorites'>
                <Text color='white' h3>Favoritos</Text> 
              
           </NextLink>
           

    </div>
  );
}


