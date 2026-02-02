import React from "react";
import { createHashRouter, Navigate } from "react-router-dom";

import MarketingLayout from "./app/layouts/MarketingLayout.jsx";
import AppLayout from "./app/layouts/AppLayout.jsx";
import ProtectedRoute from "./app/components/ProtectedRoute.jsx";

import Home from "./pages/public/Home.jsx";
import Books from "./pages/public/Books.jsx";
import Codex from "./pages/public/Codex.jsx";
import Stories from "./pages/public/Stories.jsx";
import StoryReader from "./pages/public/StoryReader.jsx";
import Roadmap from "./pages/public/Roadmap.jsx";
// import About from "./pages/public/About.jsx";
import Support from "./pages/public/Support.jsx";
import CodexEntry from "./pages/public/CodexEntry.jsx";

import BookReader from "./pages/public/BookReader.jsx";

import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

import Library from "./pages/appViews/Library.jsx";
import Characters from "./pages/appViews/Characters.jsx";
import CharacterNew from "./pages/appViews/CharacterNew.jsx";
import Settings from "./pages/appViews/Settings.jsx";

import NotFound from "./pages/NotFound.jsx";

export const router = createHashRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <Books /> },
      { path: "/codex", element: <Codex /> },
      { path: "/codex/:entryId", element: <CodexEntry /> },

      { path: "/stories", element: <Stories /> },
      { path: "/stories/:storyId", element: <StoryReader /> },
      { path: "/roadmap", element: <Roadmap /> },
      // { path: "/about", element: <About /> },
      { path: "/support", element: <Support /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/signup", element: <Signup /> },
      { path: "/books/:bookId", element: <BookReader /> },
      { path: "/books/:bookId/:chapterId", element: <BookReader /> },
    ],
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="library" replace /> },
      { path: "library", element: <Library /> },
      { path: "characters", element: <Characters /> },
      { path: "characters/new", element: <CharacterNew /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
