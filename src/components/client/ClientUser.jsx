import Client from "./Client";
import ClientLog from "./ClientLog";
import ClientSign from "./ClientSign";
import { Routes, Route } from "react-router-dom";

export default function ClientUser() {
  return (
    <div>
      <Routes>
        <Route path="/Clientsign" element={<ClientSign />}></Route>
        <Route path="/Clientlog" element={<ClientLog />}></Route>
        <Route path="/Client/:id" element={<Client />}></Route>
      </Routes>
    </div>
  );
}
