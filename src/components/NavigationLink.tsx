'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps, useEffect, useState } from 'react';
import { Link } from '../navigation';
import { useTheme } from 'next-themes';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Asegurarse de que el componente se ha montado para evitar el mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Devuelve un estilo por defecto hasta que el componente esté montado
    return (
      <Link
        aria-current={isActive ? 'page' : undefined}
        href={href}
        style={{
          color: 'transparent', // Estilo temporal para evitar el mismatch
          backgroundColor: 'transparent',
        }}
        {...rest}
      />
    );
  }

  // Determine colors based on active state and theme
  const textColor = isActive
    ? 'white'
    : resolvedTheme === 'dark'
    ? 'white'
    : 'black';

  const bgColor = isActive ? '#023047' : 'transparent';

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = isActive ? 'lightgray' : 'darkgray';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = textColor;
      }}
      {...rest}
    />
  );
}