import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

// Mock pages for now
const HomePage = React.lazy(() => import('../pages/HomePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage'));
const BusinessPage = React.lazy(() => import('../pages/BusinessPage'));
const MarketingPlanPage = React.lazy(() => import('../pages/MarketingPlanPage'));
const HowToStartPage = React.lazy(() => import('../pages/HowToStartPage'));
const ContactsPage = React.lazy(() => import('../pages/ContactsPage'));
const FAQPage = React.lazy(() => import('../pages/FAQPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const AdminPreviewPage = React.lazy(() => import('../pages/AdminPreviewPage'));
const LegalPage = React.lazy(() => import('../pages/LegalPage'));

export function AppRouter() {
  return (
    <HashRouter>
      <React.Suspense fallback={<div className="flex h-screen items-center justify-center p-4">Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="marketing" element={<MarketingPlanPage />} />
            <Route path="how-to-start" element={<HowToStartPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="legal" element={<LegalPage />} />
          </Route>
          
          {/* Dashboard/Admin typically don't have the standard header/footer */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin-preview" element={<AdminPreviewPage />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
}
