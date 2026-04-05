"use client";
import React from 'react';
import Container from '../../common/Container';
import Heading from '../../common/Heading';
import Timer from '../../common/Timer';

const FlashSale = () => {
  return (
    <div className='mt-[140px] pb-[60px]'>
      <Container>
        <div className='flex items-end gap-x-[87px]'>
          <Heading title="tomorrow" description="Flash Sale" />
          <Timer  targetDate="2026-04-10T00:00:00"/>
        </div>
      </Container>
    </div>
  );
}

export default FlashSale;