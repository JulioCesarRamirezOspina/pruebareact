import React, { useState, useEffect } from 'react';
import formbricks from "@formbricks/js";
import imagen from './ceremonia-23-sep-2023.png';
import './App.css';
import AudioPlayer from './components/AudioPlayer'; // Asume que AudioPlayer está en el mismo directorio
import sampleAudio from './laSendaInca.mp3';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
