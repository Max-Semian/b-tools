'use client';

import { usePathname } from 'next/navigation';
import { APP_BASE_PATH } from '../utils/constants';

export const useNavigation = () => {
  const pathname = usePathname();
  
  // Function to check if we're on the homepage
  const isOnHomePage = (): boolean => {
    // In Next.js with basePath, the pathname could be '/' or empty
    // This check handles both cases with and without trailing slashes
    return pathname === '/' || 
           pathname === '' || 
           pathname === APP_BASE_PATH || 
           pathname === `${APP_BASE_PATH}/`;
  };
  
  // Function to handle smooth scrolling to an element
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const headerHeight = window.innerWidth <= 768 ? 90 : 70;
    const extraPadding = 20;
    
    const y = element.getBoundingClientRect().top + window.scrollY - (headerHeight + extraPadding);
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    // Update URL without triggering a scroll
    window.history.pushState(null, '', `#${id}`);
  };
  
  // Handle navigation for anchor links
  const handleAnchorNavigation = (e?: React.MouseEvent<HTMLAnchorElement>, id?: string) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!id) return;
    
    // If we're on the homepage, just scroll to the element
    if (isOnHomePage()) {
      scrollToElement(id);
      return;
    }
    
    // We're on a different page, navigate to homepage with the anchor
    window.location.href = `${APP_BASE_PATH}/#${id}`;
  };
  
  return {
    pathname,
    isHomePage: isOnHomePage(),
    scrollToElement,
    handleAnchorNavigation
  };
};