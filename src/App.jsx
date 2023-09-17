import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './App/Components/NotFound/NotFound';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { CV } from './App/CV/CV';
import { Projects } from './App/Projects/Projects';
import { Blocks } from './App/Blocks';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar/Calendar';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/FAQ/FAQ';
import { Widgets } from './App/Widgets/Widgets';
import { Settings } from './App/Settings/Settings';
import { Login } from './Login';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Layout withSidebar />}>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="CV/*" element={<CV />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="Widgets/*" element={<Widgets />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
