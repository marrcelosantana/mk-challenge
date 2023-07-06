import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Client } from "@/pages/Forms/Client";
import { File } from "@/pages/Forms/File";

import { Menu } from "@/components/Menu";
import { Subtotal } from "@/components/Subtotal";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Subtotal />
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/file" element={<File />} />
      </Routes>
    </BrowserRouter>
  );
}
