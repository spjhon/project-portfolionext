'use client';
 
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '../navigation';
 
export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <Link
  aria-current={isActive ? 'page' : undefined}
  href={href}
  style={{
    color: isActive ? 'white' : 'black',
    backgroundColor: isActive ? '#023047' : 'transparent',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = isActive ? 'lightgray' : 'darkgray';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = isActive ? 'white' : 'black';
  }}
  {...rest}
/>
  );
}