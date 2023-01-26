import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FileLoaderExample } from "./file-loader";
import { RawLoaderExample } from "./raw-loader";

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/raw-loader">Raw Loader</Link>
          </li>
          <li>
            <Link to="/file-loader">File Loader</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/">
            <Route path="raw-loader" element={<RawLoaderExample />} />
            <Route path="file-loader" element={<FileLoaderExample />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
