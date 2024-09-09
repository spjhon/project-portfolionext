import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface ImageProps {
  backgroundImage: string;
  backgroundImageDark: string;
}

interface HeroProps {
  children: React.ReactNode;
  imageToRender?: ImageProps;
}

const Hero: React.FC<HeroProps> = ({ children, imageToRender }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // No renderizar nada hasta que el tema esté montado
    return null;
  }

  const backgroundImage = imageToRender?.backgroundImage || '';
  const backgroundImageDark = imageToRender?.backgroundImageDark || '';

  const divStyle = {
    backgroundImage: resolvedTheme === 'light' ? `url(${backgroundImage})` : `url(${backgroundImageDark})`,
  };

  return (
    <div className="relative w-full h-full bg-cover bg-center " style={divStyle}>
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative z-10 h-full w-full flex justify-center backdrop-blur-sm">{children}</div>
    </div>
  );
};

export default Hero;