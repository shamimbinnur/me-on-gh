import React, { FC } from 'react'
import { getArticles } from '../utils';

export interface GreetingsProps {
    greetingsData :{
        language: {
            lang: string,
            count: number,
        },
        userInfo: {
            name: string,
        }
    }
}

const Greetings: FC<GreetingsProps> = ({ greetingsData}) => {
    const { 
        language:{
            lang,
            count
        },
        userInfo:{
            name
        }
    } = greetingsData;
    
    const articles = getArticles(lang)

    return (
    <div className='font-primary mt-20 px-4'>
        <div className='text-[2rem] text-center  text-primaryTwo'>
            <h1>Greetings, <span className='font-semibold text-gray-500'>{name}!</span> </h1>
        </div>

        <div className='max-w-sm mx-auto mt-16 mb-20'>
            <p className=' text-gray-800 text-[1.5rem] text-center '>{`I can bet, you're ${articles}` } <span className='font-semibold text-primaryTwo' >{lang}</span> expert!</p>
        </div>

        <p className='text-center text-gray-500 text-sm'>Just a sec, and you are ready to go!</p>

    </div>
  )
}

export default Greetings