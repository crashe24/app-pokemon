import { FC } from "react"
import Head from "next/head"
import {NavBar} from '../ui';

interface Props {
    children?: JSX.Element|JSX.Element[],
    title?:string
}

// este me obtine la url del servidor localhost:3000
const origin = (typeof window ==='undefined')?'':window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Jorge Leon"/>
                <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

                <meta property="og:title" content={`Information of ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.jpg`} />
           
            </Head>
            {/* navbar */}
            <NavBar />

            <main style={{
                padding: '0 20px'  
            }}>
                {children}
            </main>
        </>
    )
}