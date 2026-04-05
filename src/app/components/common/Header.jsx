import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <header className='py-3 bg-black'>
        <Container>
            <div className='flex items-center  justify-center gap-x-2'>
                <p className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className='text-[14px] text-white underline '>ShopNow</a>
            </div>
        </Container>
    </header>
  )
}

export default Header