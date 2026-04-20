import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import privacyPolicyHtml from '../pages/privacy-policy.html?raw';

const pageTitle =
  privacyPolicyHtml.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ??
  'SeaLens - Privacy Policy';

const pageStyles =
  privacyPolicyHtml.match(/<style>([\s\S]*?)<\/style>/i)?.[1]?.trim() ?? '';

const pageBody =
  privacyPolicyHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]?.trim() ??
  privacyPolicyHtml;

function PrivacyPolicy() {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <>
      {pageStyles ? <style>{pageStyles}</style> : null}
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Navigate to="/privacy" replace />} />
        <Route path="*" element={<Navigate to="/privacy" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
