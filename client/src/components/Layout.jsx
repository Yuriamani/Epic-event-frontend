// src/components/Layout.jsx
import React from 'react';
import PageNavigation from './PageNavigation'; // Import your navigation component
import Footer from './Footer'; // Import your footer component
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <PageNavigation />
      <main>
        <Container>
          {children} {/* Render the content of the page */}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
