import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='py-3 bg-black'>
      <Container>
        <div className='flex items-center justify-center gap-x-2'>
          <p className='text-white'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>

          <Link  href="/product" className='text-[14px] text-white underline'>
            ShopNow
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header